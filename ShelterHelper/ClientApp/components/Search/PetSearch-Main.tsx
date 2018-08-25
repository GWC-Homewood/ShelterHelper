import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as PetStore from '../../store/Pets';
import { PetSearchBox } from '../Search/PetSearch-SearchBox';

type PetProps =
    PetStore.PetState
    & typeof PetStore.actionCreators
    & RouteComponentProps<{}>


class PetSearchMain extends React.Component<PetProps, {}> {

    public render() {
        return <div>
            <PetSearchBox/>

        </div>
    }
}

export default connect(
    (state: ApplicationState) => ({ ...state.pets }),
    ({ ...PetStore.actionCreators })
)(PetSearchMain) as typeof PetSearchMain;