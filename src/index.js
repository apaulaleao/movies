import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { Provider } from 'react-redux';
//import {BrowserRouter} from 'react-router-dom';
//import {PersistGate} from 'react-persist/integration/react';
//import registerServiceWorker from './registerServiceWorker'





ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

  //  <Provider store={store}>
    // <BrowserRouter>
      //<PersistGate persistor = {persistor}>
      //<App />
      //</PersistGate>
       // </BrowserRouter>
        //</Provider>
//, 
//registerServiceWorker();
