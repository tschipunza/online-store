import React from 'react';
import './App.css';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import {Switch,Route} from 'react-router-dom';

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// )

function App() {
  return (
    <div >
      <Header/>
      <Switch>
         <Route exact path ='/'component={Homepage }/>
         <Route path ='/shop'component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
