import React, { Component } from 'react';
import {view as Header} from './components/header/';
import {view as Home} from './pages/home/';
import {view as Tags} from './pages/tags/';
import {view as Categories} from './pages/categories/';
import {view as Archives} from './pages/archives/';
import {view as About} from './pages/about/';
import {view as Footer} from './components/footer/';

class App extends Component {
  render() {
    return (
      <div>
	<Header />
	<Home />
	<Tags />
	<Categories />
	<Archives />
	<About />
	<Footer />
      </div>
    );
  }
}

export default App;
