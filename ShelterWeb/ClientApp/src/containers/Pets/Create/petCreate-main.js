import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {PetCreateEntry } from '../Create/petCreate-entry';

export class PetCreateMain extends React.Component {
    render() {
        return <div>
            <br/>
            <br/>
            <PetCreateEntry/>
        </div>;
    }
}

export default connect()
    (PetCreateMain);