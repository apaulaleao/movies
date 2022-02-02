//import React, { Component } from 'react'
//import {createStore, applyMiddleware, compose} from 'redux'
//import {Provider} from 'react-redux'
//import thunk from 'redux-thunk'

//import rootReducer from './rootReducer'
//import MovieLibrary from './MovieLibrary'


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//const store = createStore(
  //rootReducer,
  //composeEnhancers(applyMiddleware(thunk))
//)

import React from 'react';
import 'swiper/swiper.min.css';
import '../src/assets/boxicons-2.0.7/css/boxicons.min.css';
//import MovieRow from './MovieLibrary/components/MovieRow/MovieRow';
import './App.scss';

import{BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
    <Route render={props =>(
      <>
      <Header {...props}/>
      <Routes/>
      <Footer/>
      </>
    )}/>
    </BrowserRouter>
    
  );
};

export default App;



//class App extends Component {
  //render() {
    //return (
      //<Provider store={store}>
        //<MovieLibrary />
        //<MovieRow/>
      //</Provider>
   // )
 // }
//}

