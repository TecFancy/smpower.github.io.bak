import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Header extends React.Component {
  render() {
    console.log(this.context.store.getState().header);
    return (
      <div className="header">
	<div className="header-inner">
	  <div className="header-inner-logo">
	    Site's title
	  </div>
	  <div className="header-inner-buttons">
	    <span>home</span>
	    <span>tags</span>
	    <span>categories</span>
	    <span>archives</span>
	    <span>about</span>
	  </div>
	</div>
      </div>
    );
  }
}

Header.contextTypes = {
  store: PropTypes.object
};

export default Header;
