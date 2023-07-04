import React, { Component } from 'react';
import './style.css'
class Details extends Component {
    render() { 
        return (
        <>
            <div className="details">
                <p className='fullWidth'>{this.props.details}</p>
            </div>
        </>);
    }
}
 
export default Details;
