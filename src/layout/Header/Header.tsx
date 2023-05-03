import React from 'react';
import Logo from '../../assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <div className="Header-Container">
      <div>
        <a href="https://www.rotina.com.br/">
          <img src={Logo} alt="Rotina Imobiliária" className="Logo-Header" />
        </a>
      </div>
      <div>
        <a
          className="Button-Header"
          href="https://www.portalunsoft.com.br/area-do-cliente/rotina"
        >
          ÁREA DO CLIENTE
        </a>
      </div>
    </div>
  );
};

export default Header;
