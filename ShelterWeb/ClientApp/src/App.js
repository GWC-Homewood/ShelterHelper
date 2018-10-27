import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import petSearchMain from './containers/Pets/Search/petSearch-Main';
import petCreateMain from './containers/Pets/Create/petCreate-main';

export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route path='/pets' component={petSearchMain} />
        <Route path='/addPet' component={petCreateMain}/>
  </Layout>
);
