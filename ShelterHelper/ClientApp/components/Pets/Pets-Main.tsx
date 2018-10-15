import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as PetStore from '../../store/Pets';

type PetProps = 
    PetStore.PetState
    & typeof PetStore.actionCreators
    & RouteComponentProps<{}>


 class PetMain extends React.Component<PetProps, {}> {

    public render() {
        return <div>
                

            </div>
    }
}

export default connect(
    (state: ApplicationState) => ({ ...state.pets }),
    ({ ...PetStore.actionCreators })
)(PetMain) as typeof PetMain;