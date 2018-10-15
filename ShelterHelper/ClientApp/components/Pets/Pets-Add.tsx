import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as PetStore from '../../store/Pets';

type PetAddProps = PetStore.PetState
    & typeof PetStore.actionCreators
    & RouteComponentProps<{}>

export class PetAdd extends React.Component<PetAddProps, {}> {
    constructor(props: PetAddProps) {
        super(props);
    }


    public render() {
        return <div>

        </div>
    }
}

export default connect(
    (state: ApplicationState) => ({ ...state.pets}),
    ({...PetStore.actionCreators})
)(PetAdd) as typeof PetAdd;