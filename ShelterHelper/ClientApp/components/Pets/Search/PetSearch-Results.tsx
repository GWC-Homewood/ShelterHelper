import * as React from 'react';
import { NavLink, Link, RouteComponentProps } from 'react-router-dom';
import { Grid, GridColumn as Column, GridCell} from '@progress/kendo-react-grid';

export interface PetSearchResultsProps extends React.Props<HTMLDivElement> {

}


export const PetSearchResults: React.StatelessComponent<PetSearchResultsProps> = props => (
    <div className='card'>
        <div className='card-header'>Results</div>
        <div className='card-body card-body-grid'>
            <Grid style={{ height: '400px' }}>
                    <Column cell={DetailsCommand()} filterable={false} sortable={false} width={'120px'} />
                    <Column title='Name' />
                    <Column title='Age'/>
                    <Column title='Microchip #' />
                    <Column title='Owner/Foster' />
                </Grid>
        </div>
    </div>
);

export default function DetailsCommand() {
    return class extends GridCell {
        render() {
            return (<td>
                <Link className='btn btn-outline-primary' to={'/PetDetails/' + this.props.dataItem.id}>View</Link>
            </td>);
        }
    }
}