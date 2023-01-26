import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from '../../types/links';

const RedirectButton: React.FC<Link> = (props) => {
  const { number, title, route, namePath } = props;
  const navigate = useNavigate();

  return (
    <div
      className="Redirect-Button"
      onClick={() =>
        navigate(`/Central_de_Ajuda/${namePath}`, { state: route })
      }
      onKeyDown={() => null}
      aria-hidden="true"
    >
      <span>
        {number}. {title}
      </span>
      <div className="Circle-Button">
        <FiChevronRight color="white" size={30} />
      </div>
    </div>
  );
};

export default RedirectButton;
