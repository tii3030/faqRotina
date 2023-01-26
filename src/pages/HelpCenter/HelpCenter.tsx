import React from 'react';
import uuid from 'react-uuid';
import { FiBox, FiHome, FiCornerRightDown } from 'react-icons/fi';
import RedirectButton from '../../components/RedirectButton/RedirectButton';
import { linksTenantHelp, landlordHelp, about } from '../../mocks/links';
import { Link } from '../../types/links';

const HelpCenter: React.FC = () => {
  return (
    <div className="Faq01">
      <section className="Help-Search-Area">
        <div>
          <h1>Como podemos te ajudar ?</h1>
          <div className="Custom-Search">
            <input
              type="text"
              className="Custom-Search-Input"
              placeholder="Digite aqui sua dúvida..."
            />
            <button className="Custom-Search-Button" type="submit">
              BUSCAR
            </button>
          </div>
        </div>
      </section>

      <div className="Container">
        <section className="Sections">
          <div className="Left-Section">
            <div>
              <h1>Ajuda locatário</h1>
              <span>(Inquilino)</span>
              <FiBox />
            </div>
            <div>
              <p>
                Tudo que você precisa saber sobre sua locação. Acesse e saiba
                sobre nosso aplicativo, área do cliente, pagamentos, rescisão e
                muito mais.
              </p>
            </div>
          </div>
          <div className="Right-Section">
            <div>
              {linksTenantHelp.map((line: Link) => (
                <RedirectButton
                  number={line.number}
                  title={line.title}
                  route={line.route}
                  namePath={line.namePath}
                  key={uuid()}
                />
              ))}
            </div>
          </div>
        </section>
        <hr />
        <section className="Sections">
          <div className="Left-Section">
            <div>
              <h1>Ajuda locador</h1>
              <span>(proprietário)</span>
              <FiHome />
            </div>
            <div>
              <p>
                Veja como acompanhar todas as informações e status do seu imóvel
                através do nosso aplicativo e área do cliente.
              </p>
            </div>
          </div>
          <div className="Right-Section">
            <div>
              {landlordHelp.map((line: Link) => (
                // eslint-disable-next-line react/no-array-index-key
                <RedirectButton
                  number={line.number}
                  title={line.title}
                  route={line.route}
                  namePath={line.namePath}
                  key={uuid()}
                />
              ))}
            </div>
          </div>
        </section>
        <hr />
        <section className="Sections">
          <div className="Left-Section">
            <div>
              <h1>Sobre a Rotina</h1>
              <FiCornerRightDown />
            </div>
            <div>
              <p>
                Saiba quem somos, nossos contatos, parcerias e todos os detalhes
                sobre nosso programa de indicações e antecipação de aluguel.
              </p>
            </div>
          </div>
          <div className="Right-Section">
            <div>
              {about.map((line: Link) => (
                // eslint-disable-next-line react/no-array-index-key
                <RedirectButton
                  number={line.number}
                  title={line.title}
                  route={line.route}
                  namePath={line.namePath}
                  key={uuid()}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
