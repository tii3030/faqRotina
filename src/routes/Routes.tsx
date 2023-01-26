import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Routers,
  Route,
  Navigate,
} from 'react-router-dom';
import uuid from 'react-uuid';
import Wrapper from '../wrapper/wrapper';
import HelpCenter from '../pages/HelpCenter/HelpCenter';
import Faq02 from '../pages/Faq02/Faq02';
import Faq03 from '../pages/Faq03/Faq03';
import { routes } from '../mocks/links';

const Routes: React.FC = () => (
  <Router>
    <Routers>
      <Route path="/" element={<Navigate to="/Central_de_Ajuda" />} />
      <Route
        path="/Central_de_Ajuda"
        element={
          <Wrapper>
            <HelpCenter />
          </Wrapper>
        }
      />
      {routes.map((path) => (
        <Route
          path={path}
          element={
            <Wrapper>
              <Faq02 />
            </Wrapper>
          }
          key={uuid()}
        />
      ))}
      <Route
        path="/Central-de-Ajuda/faq02"
        element={
          <Wrapper>
            <Faq02 />
          </Wrapper>
        }
      />
      <Route
        path="/faq03"
        element={
          <Wrapper>
            <Faq03 />
          </Wrapper>
        }
      />
    </Routers>
  </Router>
);

export default Routes;
