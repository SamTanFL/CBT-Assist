import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Event extends Component {

    render() {

        return(
            <div className="border-top border-primary p-3" onClick={ ()=>{ this.props.sendEvent( this.props.event ) } } >
                <p>Event:</p>
                <p>{ this.props.event.title }</p>
                <p>Description:</p>
                <p>{ this.props.event.description }</p>
            </div>
        );
    }
}

export default Event;