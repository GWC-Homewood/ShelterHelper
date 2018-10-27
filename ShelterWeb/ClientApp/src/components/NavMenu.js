import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import brandImage from '../images/PawCross.jpg';

export default class NavMenu extends React.Component{
    render() {
        return <div>
            <nav className='navbar nav-top'>
                <Link to={'/'} className='navbar-brand'><img width="20" height="20" src={brandImage} /> Shelter Helper </Link>
            </nav>
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark nav-bottom'>
                <div className='collapse navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink className='nav-link' exact to={'/'} activeClassName='active'>Home</NavLink>
                        <NavLink className='nav-link' exact to={'/pets'} activeClassName='active'>Pets</NavLink>
                        <NavLink className='nav-link' to={'/parents'} activeClassName='active'>Foster Parents</NavLink>
                        <NavLink className='nav-link' to={'/sponsors'} activeClassName='active'>Sponsors</NavLink>
                        <NavLink className='nav-link' to={'/campaigns'} activeClassName='active'>Campaigns</NavLink>
                        <NavLink className='nav-link' to={'/contact'} activeClassName='active'>Contact</NavLink>
                </div>
                </div>
            </nav>
            <nav className='navbar nav-bottom'/>
        </div>;

    }

}
