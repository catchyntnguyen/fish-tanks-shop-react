// store.js
import { createStore } from 'redux';
import reducer from '../reduces/Usereducer';

const store = createStore(reducer);

export default store;
