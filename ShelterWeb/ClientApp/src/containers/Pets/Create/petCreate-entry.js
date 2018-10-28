import * as React from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';

export const PetCreateEntry = props => (
    <div className='card'>
        <div className='card-header'>Enter a new pet.</div>
        <div className='card-body'>
            <form>
                <div className='form-row'>
                    <div className='col-sm-4 form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' name='name' value={props.pet.name} onChange={(e) => props.onChange(e)}/>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-sm-4 form-group'>
                        <label htmlFor='microchip'>Micro Chip</label>
                        <input className='form-control' name='microchip' value={props.pet.microchip} onChange={(e) => props.onChange(e)} />
                    </div>
                    <div className='col-sm-4 form-group'>
                        <label htmlFor='birthDate'>Birth Date</label>
                        <DatePicker className='form-control' name='birthDate' value={props.pet.birthDate} onChange={(e) => props.onChange(e)}/>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-sm-8'>
                    <button type='button' className='btn btn-outline-primary btn-group'>Create</button>
                        <button type='button' className='btn btn-outline-secondary' onClick={(e) => { props.goBack(); }}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );