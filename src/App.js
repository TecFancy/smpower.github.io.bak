import React, { Component } from 'react';
import {view as Header} from './components/header/';
import {view as Home} from './pages/home/';
import {view as Resume} from './pages/resume/';
import {view as Footer} from './components/footer/';

class App extends Component {
  render() {
    return (
      <div>
	<Header />
	<Home />
	<Resume />
	<Footer />
      </div>
    );
  }
}

export default App;
