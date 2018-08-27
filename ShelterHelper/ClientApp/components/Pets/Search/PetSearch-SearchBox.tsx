import * as React from 'react';
import { NavLink, Link, RouteComponentProps } from 'react-router-dom';

export interface PetSearchBoxProps extends React.Props<HTMLDivElement> {

}


export const PetSearchBox: React.StatelessComponent<PetSearchBoxProps> = props => (
    <div>
        <br />
        <br/>
        <form className='form'>
            <div className='input-group'>
                <input type='text' className='form-control' placeholder='Enter name or microchip number to search'></input>
                <div className='input-group-append'>
                    <button className='btn btn-outline-primary' type='button'>Search</button>
                </div>
            </div>
        </form>

    </div>
);
