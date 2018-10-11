import {GET_NAVIGATION} from './actionTypes';

const navigation = [
  {
    page: 'home',
    navLink: {
      exact: true,
      to: '/',
      text: 'Home'
    }
  },
  {
    page: 'tags',
    navLink: {
      to: '/Tags',
      text: 'Tags'
    }
  },
  {
    page: 'categories',
    navLink: {
      to: '/Categories',
      text: 'Categories'
    }
  },
  {
    page: 'archives',
    navLink: {
      to: '/Archives',
      text: 'Archives'
    }
  },
  {
    page: 'about',
    navLink: {
      to: '/About',
      text: 'About'
    }
  },
  {
    page: 'resume',
    navLink: {
      to: '/Resume',
      text: 'Resume'
    }
  }
];

export default (state = navigation, action) => {
  switch(action.type) {
    case GET_NAVIGATION:
      return state;
    default:
      return state;
  }
};
