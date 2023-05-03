import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiChevronDown, FiChevronRight, FiSearch } from 'react-icons/fi';
import { topics } from '../../mocks/links';
import { Content } from '../../types/links';

const Topics: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const links: any = topics.filter(function (line) {
    return line.id === location.pathname;
  })[0];
  const [searchInput, setSearchInput] = useState('');
  const [onInputClick, setOnInputClick] = useState(false);
  const [results, setResult] = useState<Content[]>();

  const handleChange = (e: any | (() => void)) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const result = links?.links.filter((line: any) =>
      line.titleLink.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResult(result);
  }, [searchInput]);

  useEffect(() => {
    if (links === undefined) {
      navigate(`/error`);
    }
  }, [links]);

  const [isSubLinks, setIsSubLinks] = useState<Array<string>>([]);
  const [aux, setAux] = useState(false);

  const pushItems = (item: string) => {
    const arrayTemp = isSubLinks;
    if (arrayTemp.includes(item)) {
      arrayTemp.splice(arrayTemp.indexOf(item), 1);
    } else {
      arrayTemp.push(item);
    }
    setIsSubLinks(arrayTemp);
    setAux(!aux);
  };

  return (
    <div className="Topics">
      <section className="Top-Section">
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
                results.map((line: Content) => (
                  <div key={uuid()}>
                    <li
                      aria-hidden="true"
                      onMouseDown={() => setSearchInput(line.titleLink)}
                    >
                      {line.titleLink}
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
        <div>
          <h1>{links?.title}</h1>
          <div
            className="SubTitle"
            dangerouslySetInnerHTML={{
              __html: links?.subTitle.replace(/'/g, ''),
            }}
          />
        </div>
      </section>
      <section className="Links-Section">
        <div>
          {results?.map((line: any) =>
            !line.subLinks ? (
              <div
                key={uuid()}
                onClick={() => navigate(`${line.route}`)}
                onKeyDown={() => null}
                aria-hidden="true"
              >
                <span key={uuid()}>{line.titleLink}</span>
                <hr />
              </div>
            ) : (
              <div
                key={uuid()}
                onClick={() => pushItems(line.titleLink)}
                onKeyDown={() => null}
                aria-hidden="true"
              >
                <div className="Line-Collapsible">
                  <span key={uuid()}>{line.titleLink}</span>
                  {isSubLinks.includes(line.titleLink) ? (
                    <FiChevronDown size={23} />
                  ) : (
                    <FiChevronRight size={23} />
                  )}
                </div>
                <hr />
                <div
                  className={
                    isSubLinks.includes(line.titleLink)
                      ? 'Sub-Links Open-Sub'
                      : 'Close-Sub'
                  }
                >
                  {line.subLinks?.map((subLine: any) => (
                    <div
                      key={uuid()}
                      onClick={() => navigate(`${subLine.route}`)}
                      onKeyDown={() => null}
                      aria-hidden="true"
                      className="Cursor-Pointer"
                    >
                      <span key={uuid()}>{subLine.titleLink}</span>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Topics;
