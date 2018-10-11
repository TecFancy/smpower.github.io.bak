import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import './style.css';

const Header = ({headerData}) => (
  <div className="header">
    <div className="header-inner">
      <div className="header-inner-logo">
	Site's title
      </div>
      <div className="header-inner-buttons">
	{
	  headerData.map((item, index) => {
	    return (
	      <NavLink
		key={index}
	        exact={item.navLink.exact}
		to={item.navLink.to}
	      >{item.navLink.text}</NavLink>
	    );
	  })
	}
      </div>
    </div>
  </div>
);

Header.propTypes = {
  headerData: PropTypes.array.isRequired
};

class HeaderContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getOwnState = this.getOwnState.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      header: this.context.store.getState().header
    };
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextState, nextProps) {
    return true;
  }

  componentDidMount() {
    this.setState({
      unsubscribe: this.context.store.subscribe(this.onChange)
    });
  }

  componentWillUnmount() {
    this.state.unsubscribe(this.onChange);
  }

  render() {
    return <Header headerData={this.state.header} />;
  }
}

HeaderContainer.contextTypes = {
  store: PropTypes.object
};

export default HeaderContainer;
