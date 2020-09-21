import React from 'react';


import Yasmin_year from '../../assets/Yasmin_year.jpg';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const YasminPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
          <Column>
            <h3>Yasmin Tamai</h3>
            <h4>The World of Yasmin</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src={Yasmin_year}
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default YasminPost;