import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import PetSearch from './components/Pets/petSearch'
import PetAdd from './components/Pets/petAdd';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    <Route path='/pets' component={PetSearch} />
    <Route path='/addPet' component={PetAdd} />
</Layout>;
