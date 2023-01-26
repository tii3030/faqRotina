import React from 'react';
import uuid from 'react-uuid';
import { Link, useLocation } from 'react-router-dom';
import { nameRoutes } from '../../mocks/links';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const arr = location.pathname.split('/');
  arr.shift();

  return (
    <nav className="Breadcrumbs">
      {arr.map((item: string, index: number) => (
        <div key={uuid()}>
          <Link
            key={uuid()}
            to={
              index === arr.length - 1
                ? '/Central_de_Ajuda'
                : '/Central_de_Ajuda'
            }
            className={
              index === arr.length - 1
                ? 'Breadcrumb-Active'
                : 'Breadcrumb-Not-Active'
            }
          >
            {nameRoutes[item as keyof object]}
          </Link>
          {index !== arr.length - 1 && (
            <span className="Breadcrumb-Arrow">&gt;</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
