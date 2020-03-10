import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Event from './event'

export class Events extends Component {

    render() {

        console.log("RENDERING EventS")
        console.log(this.props.Events)

        const EventsEle = this.props.Events.map( Event => {
            return <Event key={ event.id } event={ Event } />
        })

        return(
            <div>
                {EventsEle}
            </div>
        );
    }
}

export default Events;