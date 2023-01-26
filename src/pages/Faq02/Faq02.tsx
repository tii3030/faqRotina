import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { faq02 } from '../../mocks/links';
import { LinkContent, Content } from '../../types/links';

const Faq02: React.FC = () => {
  const { state } = useLocation();
  const links: LinkContent[] = faq02.filter(function (el) {
    return el.route === state;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  return (
    <div className="Faq02">
      <section className="Top-Section">
        <div className="Search-Area">
          <input
            type="text"
            className="Search-Input"
            placeholder="Pesquise aqui..."
          />
          <FiSearch className="Search-Input-Button" color="#333333" size={35} />
        </div>
        <div>
          <h1>{links[0].title}</h1>
          <div
            className="SubTitle"
            dangerouslySetInnerHTML={{
              __html: links[0].subTitle.replace(/'/g, ''),
            }}
          />
        </div>
      </section>
      <section className="Links-Section">
        <div>
          {links[0].links.map((line: Content) => (
            <div key={uuid()}>
              <span key={uuid()}>{line.title}</span>
              <hr />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq02;
