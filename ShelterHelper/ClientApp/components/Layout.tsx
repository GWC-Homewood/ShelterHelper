import * as React from 'react';
import { NavMenu } from './NavMenu';
import { NavLink, Link } from 'react-router-dom';
import brandImage from '../../ClientApp/images/PawCross.jpg';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div>
            <div className='container'>
                <div className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
                    <div className='navbar-header'>
                        <Link to={'/'} className='navbar-brand'><img width="30" height="30" src={brandImage} /> Shelter Helper </Link>
                    </div>
                    <div className='clearfix'></div>
                    <div className='nav navbar-nav'>
                        <ul className='nav navbar-nav'>
                            <li className='nav-item'><NavLink className='nav-link' exact to={'/'} activeClassName='active'><span className='sr-only'></span>Home</NavLink></li>
                            <li className='nav-item'><NavLink className='nav-link' exact to={'/pets'} activeClassName='active'><span className='glyphicon glyphicon-home'></span>Pets</NavLink></li>
                            <li className='nav-item'><NavLink className='nav-link' to={'/parents'} activeClassName='active'><span className='glyphicon glyphicon-home'></span>Foster Parents</NavLink></li>
                            <li className='nav-item'><NavLink className='nav-link' to={'/sponsors'} activeClassName='active'><span className='glyphicon glyphicon-home'></span>Sponsors</NavLink></li>
                            <li className='nav-item'><NavLink className='nav-link' to={'/campaigns'} activeClassName='active'><span className='glyphicon glyphicon-home'></span>Campaigns</NavLink></li>
                            <li className='nav-item'><NavLink className='nav-link' to={'/contact'} activeClassName='active'><span className='glyphicon glyphicon-home'></span>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>;
    }
}
