import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Melhorar Skils</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Typescript</span>
              <span className="subtext">há 22 h • 9999 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Implementar Redux</span>
              <span className="subtext">há 1 d • 853 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Aprender Mais Sobre NextJS</span>
              <span className="subtext">há 1 d • 500 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Responsividade Mobile</span>
              <span className="subtext">há 1 d • 232 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Estudar TDD no Front</span>
              <span className="subtext">há 1 d • 230 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Melhorar Divulgação </span>
              <span className="subtext">há 1 d • 250 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
