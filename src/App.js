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
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./MovieLibrary/components/Home/Home";
import Header from "./MovieLibrary/components/Header/Header";
import Footer from "./MovieLibrary/components/Footer/Footer";
import PageNotFound from "./MovieLibrary/components/PageNotFound/PageNotFound";
import MovieDetail from "./MovieLibrary/components/MovieDetail/MovieDetail";
import './App.css';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path ="/" exact element ={<Home/>}/>
          <Route path ="/movie/:TmdbID" element = {<MovieDetail/>}/>
          <Route element ={<PageNotFound/>}/>
        </Routes>
        <Footer/>
</BrowserRouter>
    </div>
  )
}

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

