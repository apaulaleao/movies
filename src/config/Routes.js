import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import Home from '../Pages/Home';
import Catalog from '../Pages/Catalog';
import Detail from '../Pages/Detail';



const Routes = () => {
  return   (

    <Switch>
         <Route path ='/' exact
        component ={Home}
        />
        <Route path ='/:category'
        component ={Catalog}
        />
         <Route path ='/:category/:id'
        component ={Detail}
        />
        <Route path ='/:category/search/:keyword'
        component ={Catalog}
        />
        
      </Switch>
  )
  
};

export default Routes;
