import React, { Component } from 'react';

import './CSS/MergePage.css';

class MergePage extends Component {
    constructor() {
        super();
        this.handleMerge = this.handleMerge.bind(this);
    }

    handleMerge() {
        console.log('lolz');
    }

    render() {
        return (
            <div>
            <div className='buttonArea'>
                <button className='button' style={{background:'#ff9507'}} onClick={this.handleMerge}>
                    Merge!
                </button>
            </div> 

            <div className="dd-wrapper">
                <div className="dd-header">
                    <div className="dd-header-title"></div>
                </div>
                <ul className="dd-list">
                    <li className="dd-list-item"></li>
                    <li className="dd-list-item"></li>
                    <li className="dd-list-item"></li>
                </ul>
            </div>
        </div>
        );
    }
}

export default MergePage;