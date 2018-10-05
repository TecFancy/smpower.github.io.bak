import React, { Component } from 'react';
import {view as Home} from './pages/home/';
import {view as Header} from './pages/header/';

class App extends Component {
  render() {
    return (
      <div className="smpower">
	<Home />
	<Header />
      </div>
    );
  }
}

export default App;
