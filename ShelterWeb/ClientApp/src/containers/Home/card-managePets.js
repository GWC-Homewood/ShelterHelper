import * as React from 'react';
import { Link } from 'react-router-dom';
import petImage from '../../images/Pets.jpg';

export const ManagePets = props => (
    <div className='card'>
        <div className='card-body'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={petImage} width='80' height='80' alt="Register" />
                </div>
                <div className='col-sm-10'>
                    <h6>Manage Pets</h6>
                    <p>Active Pets: 0</p>
                    <p>Pets with upcomming todo items: 0</p>
                </div>
            </div>
        </div>
        <div className='card-footer'>
            <div className='row'>
                <div className='col-md-4'>
                    <Link to={'/addPet'}>Active</Link>
                </div>
                <div className='col-md-4'>
                    <Link to={'/pets'}>Search</Link>
                </div>
                <div className='col-md-4'>
                    <Link to={'/addPet'}>Create</Link>
                </div>
            </div>
        </div>
    </div>
    );