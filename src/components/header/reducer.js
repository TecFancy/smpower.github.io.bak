import {GET_NAVIGATION} from './actionTypes';

const navigation = [
  {page: 'home'},
  {page: 'tags'},
  {page: 'categories'},
  {page: 'archives'},
  {page: 'about'}
];

export default (state = navigation, action) => {
  switch(action.type) {
    case GET_NAVIGATION:
      return state;
    default:
      return state;
  }
};
