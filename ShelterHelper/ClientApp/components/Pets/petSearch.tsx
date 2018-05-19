import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';



export default class PetSearch extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return <div>
            <br />
            <br />

            <form>
                <div className = 'input-group'>
                    <input type='text' className='form-control' placeholder='Enter name or microchip number to search'></input>
                        <div className='input-group-append'>
                            <button className = 'btn btn-primary' type='button'>Search</button>
                        </div>
                </div>
             </form>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-4">
                    <div className='checkbox'>
                        <label><input type='checkbox'/>Dog</label>
                    </div>
                    <div className='checkbox'>
                        <label><input type = 'checkbox'/>Cat</label>
                    </div>
                    <div className='checkbox'>
                        <label><input type='checkbox'/>Other</label>
                    </div>
                </div>
            
                 <div className='col-md-2'>
                     <label className='radio-inline'><input type='radio' />Available</label>
                 </div>
                 <div className='col-md-2'>
                     <label className='radio-inline'><input type='radio' />Unavailable</label>
                </div>
            </div>

            <br />
            <br />

            <div className='row'>
                <div className= 'col-md-12'>
                    <div className='card'>
                        <div className='card-header'>Rover</div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <p className='card-text'>Microchip:  123456</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='card-text'>Type:  Dog</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='card-text'>Foster Parent:  Jane Doe</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>Spot</div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <p className='card-text'>Microchip:  789123</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='card-text'>Type:  Cat</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='card-text'>Foster Parent:  John Doe</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>Sammy</div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <p className='card-text'>Microchip:  121314</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='card-text'>Type:  Other</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='card-text'>Foster Parent:  Fred Flinstone</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            </div>
    }
}


