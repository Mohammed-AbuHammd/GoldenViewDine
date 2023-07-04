import React, { Component } from 'react'
import './style.css'
class Title extends Component {
    
    render() { 
        return (
            <>
            <div className="title">
                <h2>{this.props.title}</h2>
            </div>
            </>
        );
    }
}
 
export default Title;