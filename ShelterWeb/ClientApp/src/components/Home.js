import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import petImage from '../images/Pets.jpg';
import {ManagePets } from '../containers/Home/card-managePets';

export class Home extends React.Component {
    render() {
        return <div>
            <h4>Welcome to Shelter Helper</h4>

            <div className="alert alert-success">You have 0 pending work items!</div>

            <div className='row'>
                <div className='col-sm-8'>
                    <ManagePets/>
                </div>
            </div>
        </div>;

    }
}

export default connect()(Home);
