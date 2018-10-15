import React from 'react';
import NavMenu from './NavMenu';


export default class Layout extends React.Component{
    render() {
        return <div>
            <NavMenu />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>;
    }
}
