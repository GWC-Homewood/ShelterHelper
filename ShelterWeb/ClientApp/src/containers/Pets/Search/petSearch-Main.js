import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PetSearchBox } from '../Search/petSearch-SearchBox';
import { PetSearchResults } from '../Search/petSearch-results';

export class PetSearchMain extends React.Component {

    render() {
        return <div>
            <PetSearchBox />
            <br />
            <br />
            <PetSearchResults />
        </div>;
    }
}

export default connect()
    (PetSearchMain);