import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

export class Events extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return(
            <div className="col-5 border border-primary ml-1">
                <h1>Events</h1>
            </div>
        );
    }
}

export default Events;