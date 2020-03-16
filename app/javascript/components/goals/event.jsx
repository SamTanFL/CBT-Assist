import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Event extends Component {

    render() {

        return(
            <div className="border-top border-secondary p-3 rounded" onClick={ ()=>{ this.props.sendEvent( this.props.event ) } } >
                <h3>Event:</h3>
                <p>{ this.props.event.title }</p>
                <p>Description:</p>
                <p>{ this.props.event.description }</p>
            </div>
        );
    }
}

export default Event;