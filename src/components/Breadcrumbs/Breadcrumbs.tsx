import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Link, useLocation } from 'react-router-dom';
import { topics, content } from '../../mocks/links';
import { DataContent } from '../../types/links';

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const [routes, pushRoutes] = useState(['Home']);

  useEffect(() => {
    if (paths.length === 3) {
      const topicsPath: any = topics.filter(function (line) {
        return line.id === pathname;
      })[0];
      pushRoutes(['Home', topicsPath?.title]);
    }
    if (paths.length === 4) {
      const topicsPath: any = topics.filter(function (line) {
        return line.id === `/${paths[1]}/${paths[2]}`;
      })[0];
      const contentPath: DataContent = content.filter(function (line) {
        return line.id === pathname;
      })[0];
      pushRoutes(['Home', topicsPath?.title, contentPath?.title]);
    }
    if (paths.length === 2) {
      pushRoutes(['Home']);
    }
  }, [pathname]);

  const toRoute = (index: number) => {
    if (index === 0) {
      return '/home';
    }
    if (index === 1) {
      return `/home/${paths[2]}`;
    }
    return `/home/${paths[2]}/${paths[3]}`;
  };

  return (
    <nav className="Breadcrumbs">
      {routes.map((item: string, index: number) => (
        <div key={uuid()}>
          <Link
            key={uuid()}
            to={toRoute(index)}
            className={
              index === routes.length - 1
                ? 'Breadcrumb-Active'
                : 'Breadcrumb-Not-Active'
            }
          >
            {item}
          </Link>
          {index !== routes.length - 1 && (
            <span className="Breadcrumb-Arrow">&gt;</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
