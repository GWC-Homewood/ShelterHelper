import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import PetSearchMain from './containers/Pets/Search/petSearch-Main';
import petSearchMain from './containers/Pets/Search/petSearch-Main';

export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route path='/pets' component={petSearchMain} />
  </Layout>
);
