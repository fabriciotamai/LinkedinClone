import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  ArticleIcon,
} from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="write">
          <WriteIcon />
          <input className="span" placeholder="Começar uma Publicação "></input>
        </div>
        <div className="attachment">
          <button>
            <CameraIcon />
            Foto
          </button>
          <button>
            <VideoCameraIcon />
            Video
          </button>
          <button>
            <DocumentIcon />
            Documento
          </button>
          <button>
            <ArticleIcon />
            Escrever artigo
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;