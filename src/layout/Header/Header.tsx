import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="Header-Container">
      <div>
        <a href="https://www.rotina.com.br/">
          <img src={Logo} alt="Rotina Imobiliária" className="Logo-Header" />
        </a>
      </div>
      <div>
        <div
          className="Button-Header"
          onClick={() =>
            navigate('/Central_de_Ajuda/Area_do_Cliente', { state: 'faq01r1' })
          }
          onKeyDown={() => null}
          aria-hidden="true"
        >
          ÁREA DO CLIENTE
        </div>
      </div>
    </div>
  );
};

export default Header;
