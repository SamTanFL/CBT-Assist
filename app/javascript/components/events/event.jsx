import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

export class Event extends Component {

    render() {

        console.log("event is RENDERING")

        return(
            <div>
                <p>TITLE:</p>
                <p>{ this.props.event.title }</p>
                <p>Description:</p>
                <p>{ this.props.event.description }</p>
                <p>Thoughts:</p>
                <p>{ this.props.event.thoughts }</p>
                <p>Feelings:</p>
                <p>{ this.props.event.feelings }</p>
                <p>Behaviours:</p>
                <p>{ this.props.event.behaviours }</p>
            </div>
        );
    }
}

export default Event;