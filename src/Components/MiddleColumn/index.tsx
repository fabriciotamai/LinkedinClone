import React from 'react';

import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import FeedShare from './FeedShare';
import PetPost from './PetPost';
import YasminPost from './YasminPost';


import { Container } from './styles';


const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <YasminPost/>
          <PetPost />
          
         
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;