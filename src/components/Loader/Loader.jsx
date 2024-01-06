import React from 'react';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader
      visible={true}
      height="80"
      width="80"
      color="#0f9ac1"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
