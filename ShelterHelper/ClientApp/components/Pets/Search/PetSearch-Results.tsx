import * as React from 'react';
import { NavLink, Link, RouteComponentProps } from 'react-router-dom';
import { Grid, GridColumn as Column} from '@progress/kendo-react-grid';

export interface PetSearchResultsProps extends React.Props<HTMLDivElement> {

}


export const PetSearchResults: React.StatelessComponent<PetSearchResultsProps> = props => (
    <div className='card'>
        <div className='card-header'>Results</div>
        <div className='card-body'>
            <div className='row'>
                <Grid style={{ height: '400px' }}>
                    <Column title='Name' />
                    <Column title='Age'/>
                    <Column title='Microchip #' />
                    <Column title='Owner/Foster' />
                </Grid>
            </div>
        </div>
    </div>
);