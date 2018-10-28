import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {PetCreateEntry } from '../Create/petCreate-entry';

export class PetCreateMain extends React.Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            pet: { id: null, name: '', microchip: '', birthDate: new Date() }
        };
    }

    goBack() {
        this.props.history.go(-1);
    }

    onChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        let newPet = Object.assign({}, this.state.pet);
        newPet[name] = value;
        this.setState({ pet: newPet });
    }

    render() {
        return <div>
            <br/>
            <br/>
            <PetCreateEntry goBack={this.goBack} pet={this.state.pet} onChange={this.onChange}/>
        </div>;
    }
}

export default connect()
    (PetCreateMain);