import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import regImage from '../../ClientApp/images/Registration2.png';
import petImage from '../../ClientApp/images/Pets.jpg';
import sponsorImage from '../../ClientApp/images/Sponsor.jpg';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Welcome to Shelter Helper</h1>

            <div className="alert alert-success">You have 0 pending work items!</div>


            <div className="row">

                <div className="col-sm-4">
                    <div className="card cardLanding">
                        <div className="card-header">Pets</div>
                        <img className="card-img-top" src={petImage} alt="Register" />
                        <div className="card-body">
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <div className='row'>
                                <div className='col-md-4'>
                                    <Link to={'/pets'} className="btn btn-primary">Search</Link>
                                </div>
                                <div className='col-md-4'>
                                    <Link to={'/addPet'} className='btn btn-primary'>Add</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 px-3">
                    <div className="card cardLanding">
                        <div className="card-header">Foster Parents</div>
                        <img className="card-img-top" src={regImage} />
                        <div className="card-body">
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <Link to={'/parents'} className="btn btn-primary">GO</Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 px-3">
                    <div className="col-sm-4 glyphicon-align-center">
                        <div className="card cardLanding">
                            <div className="card-header">Sponsors</div>
                            <img className="card-img-top" src={sponsorImage} alt="Register" />
                            <div className="card-body">
                                <p className="card-text"></p>
                            </div>
                            <div className="card-footer">
                                <Link to={'/Sponsor'} className="btn btn-primary">GO</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>;
    }
}
