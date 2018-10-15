import * as React from 'react';


export const PetSearchBox = props => (
    <div>
        <br />
        <br />
        <form className='form'>
            <div className='input-group'>
                <input type='text' className='form-control' placeholder='Enter name or microchip number to search'/>
                <div className='input-group-append'>
                    <button className='btn btn-outline-primary' type='button'>Search</button>
                </div>
            </div>
        </form>

    </div>
    );