import React, { Component } from 'react';
class Images extends Component {
    
    render() { 
        return (
            <>
            <div className="image">
                <img src={this.props.src} alt="" />
            </div>
            </>
        );
    }
}
 
export default Images;