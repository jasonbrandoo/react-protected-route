import React from 'react';
import AuthContext from '../../context/AuthContext';

const Home = props => {
  console.log(props);
  return (
    <AuthContext.Consumer>
      {value => (
        <h1>
          Heelo
          {value.auth}
        </h1>
      )}
    </AuthContext.Consumer>
  );
};

export default Home;
