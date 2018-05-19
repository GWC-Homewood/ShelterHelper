import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';



export default class PetAdd extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card">
                            <div className='card-img-top'>
                                
                            </div>
                        </div>
                </div>
                <div className='col-md-4'>
                    <div className='row'>
                        <input type='text' placeholder ='Name'></input>
                    </div>
                    <div className='row'>
                        <h4>1234567</h4>
                    </div>
                    <div className='row'>
                        <h4>4 yrs old</h4>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Foster</h4>
                        </div>
                        <div className='card-body'>
                            <p>Jane Doe</p> <br />
                            <p>555 nowhere ave</p> <br />
                            <p>555-555-5555</p>
                        </div>
                    </div>
                </div>

                </div>

            </div>
    }

    
}