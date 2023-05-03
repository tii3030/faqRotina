import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Routers,
  Route,
  Navigate,
} from 'react-router-dom';
import uuid from 'react-uuid';
import Error from '../components/404/404';
import Wrapper from '../wrapper/wrapper';
import Home from '../pages/Home/Home';
import Topics from '../pages/Topics/Topics';
import Faq03 from '../pages/Content/Content';
import { routes } from '../mocks/links';

const Routes: React.FC = () => (
  <Router>
    <Routers>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <Wrapper>
            <Home />
          </Wrapper>
        }
      />
      {routes.topic.map((item: string) => (
        <Route
          key={uuid()}
          path={item}
          element={
            <Wrapper>
              <Topics />
            </Wrapper>
          }
        />
      ))}
      {/* <Route
        path="/home/topics/:idTopic"
        element={
          <Wrapper>
            <Topics />
          </Wrapper>
        }
      /> */}
      {routes.content.map((item: string) => (
        <Route
          key={uuid()}
          path={item}
          element={
            <Wrapper>
              <Faq03 />
            </Wrapper>
          }
        />
      ))}
      {/* <Route
        path="/home/topics/:idTopic/content/:idContent"
        element={
          <Wrapper>
            <Faq03 />
          </Wrapper>
        }
      /> */}
      <Route
        path="/error"
        element={
          <Wrapper>
            <Error />
          </Wrapper>
        }
      />
      <Route
        path="*"
        element={
          <Wrapper>
            <Error />
          </Wrapper>
        }
      />
    </Routers>
  </Router>
);

export default Routes;
