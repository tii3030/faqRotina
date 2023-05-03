import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiSearch, FiArrowUpCircle } from 'react-icons/fi';
import Menu from '../../components/Menu/Menu';
import { content, questions } from '../../mocks/links';
import { DataContent } from '../../types/links';
import getRating from '../../infra/firebase/getData';
import updateRate from '../../infra/firebase/updateRate';
import { Rating } from '../../types/rating';
import { Question, TypeQuest } from '../../types/questions';

const Content: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const location = useLocation();

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [onInputClick, setOnInputClick] = useState(false);
  const [results, setResult] = useState<TypeQuest>(questions);
  const [rating, setRating] = useState<Rating>();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [loadYes, setLoadYes] = useState(false);
  const [loadNo, setLoadNo] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    if (!location) {
      navigate('/home');
    }
    setSearchInput('');
  }, []);

  useEffect(() => {
    const result = results.filter((line) =>
      line.question.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResult(result);
  }, [searchInput]);

  const data: DataContent = content.filter(function (line) {
    return line.id === location.pathname;
  })[0];

  const handleChange = (e: any | (() => void)) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const [audioFile, setAudioFile] = useState('');

  useEffect(() => {
    async function importFile() {
      const file = await import(`../../assets/audio${location.pathname}.wav`);
      setAudioFile(file?.default);
    }
    importFile();

    getRating(location.pathname).then((value) => {
      setRating(value);
    });
  }, [location.pathname]);

  const incrementRate = async (type: string) => {
    if (type === 'yes') setLoadYes(!loadYes);
    if (type === 'no') setLoadNo(!loadNo);
    await updateRate(location.pathname, type).then(() => {
      getRating(location.pathname).then((value) => {
        setRating(value);
        if (type === 'yes') setLoadYes(false);
        if (type === 'no') setLoadNo(false);
      });
    });
  };

  const onSubmit = (question: string, id: string) => {
    setSearchInput(question);
    navigate(id);
  };

  return (
    <div className="Content">
      <Menu />
      <section>
        <div className="Search-Area">
          <input
            type="text"
            className="Search-Input"
            placeholder="Pesquise aqui..."
            onChange={handleChange}
            value={searchInput}
            onFocus={() => setOnInputClick(true)}
            onBlur={() => setOnInputClick(false)}
          />
          <FiSearch className="Search-Input-Button" color="#333333" size={35} />
          <div className={onInputClick ? 'Pop-Selection-02' : 'Is-Hide'}>
            <ul>
              {results?.length ? (
                results.map((line: Question) => (
                  <div key={uuid()}>
                    <li
                      aria-hidden="true"
                      onMouseDown={() => onSubmit(line.question, line.id)}
                    >
                      {line.question}
                    </li>
                    <hr />
                  </div>
                ))
              ) : (
                <p>Não encontramos a sua dúvida ...</p>
              )}
            </ul>
          </div>
        </div>
        <h1 className="Title-Content">{data.title}</h1>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        {audioFile && <audio src={audioFile} autoPlay={false} controls />}
        <div
          className="Content-Text"
          dangerouslySetInnerHTML={{
            __html: data.content.replace(/'/g, ''),
          }}
        />
        <hr />
        <span className="Rate-Text">Esse artigo foi útil?</span>
        <div className="Container-RateIt">
          <div
            className="Button-RateIt"
            onClick={() => incrementRate('yes')}
            onKeyDown={() => null}
            aria-hidden="true"
          >
            {loadYes ? (
              <div className="Loader" />
            ) : (
              <span>SIM: {rating?.yes}</span>
            )}
          </div>
          <div
            className="Button-RateIt"
            onClick={() => incrementRate('no')}
            onKeyDown={() => null}
            aria-hidden="true"
          >
            {loadNo ? (
              <div className="Loader" />
            ) : (
              <span>NÃO: {rating?.no}</span>
            )}
          </div>
        </div>
        {windowSize < 992 && (
          <div
            className="Scroll-Top"
            aria-hidden="true"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <span>Voltar ao topo</span>
            <FiArrowUpCircle size={30} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Content;
