import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    return (
      <div className="home">Home page.</div>
    );
  }
}

Home.contextTypes = {
  store: PropTypes.object
};

export default Home;
