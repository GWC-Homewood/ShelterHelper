import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';


//Store
export interface PetState {
    Pet: Pet;
}

export interface Pet {
    name: string;
    microchip: string;
    BirthDate: Date;
    isAvailable: Boolean;
    isDeceased: Boolean;
}

//Actions
interface RequestCreatePet {
    type: 'REQUEST_CREATE_PET';
}

interface ReceiveCreatePet {
    type: 'RECEIVE_CREATE_PET';
    results: Pet;
}

type KnownAction = RequestCreatePet | ReceiveCreatePet;

export const actionCreators = {
    SavePet: (newPet: Pet): AppThunkAction<KnownAction> => (dispatch, action) => {

    }
};


//Reducers
const unloadedState: PetState={
    Pet: {name :'', microchip:'', BirthDate: new Date, isAvailable: false, isDeceased: false }
}

export const reducer: Reducer<PetState> = (state: PetState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_CREATE_PET':
            return {
                Pet: state.Pet
            }
        case 'RECEIVE_CREATE_PET':
            return {
                Pet: action.results
            }

        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};


