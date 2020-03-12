import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Event from './event'

export class Events extends Component {

    render() {

        const eventsEle = this.props.events.map( event => {
            return <Event key={ event.id } event={ event } sendEvent={ this.props.sendEvent } />
        })

        return(
            <div>
                {eventsEle}
            </div>
        );
    }
}

export default Events;