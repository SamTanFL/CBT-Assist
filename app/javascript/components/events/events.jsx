import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import Event from "./event"
import EventForm from "./eventForm"

export class Events extends Component {

    constructor() {
        super()
        this.state = {
            editing: false,
            event: {}
        }
    }

    getEvent(){
        axios.get('/events.json', { params: { id: this.props.event.id } })
            .then( (response) => {
                let event = response.data
                this.setState( { event } )
            }).catch( ( error ) => {
                console.log( error );
            } )
    }

    editing(){
        this.getEvent()
        this.setState( { editing: !this.state.editing } )
    }

    render() {

        const editing = () => this.editing()

        let eventElement

        if(this.props.event != undefined && this.state.editing == false) {
            eventElement = <Event event={ this.props.event } eventClearer={ this.props.eventClearer } editing={ editing } />
        } else if (this.props.event!= undefined && this.state.editing == true) {
            eventElement = <EventForm event={ this.props.event } editing={ editing } />
        }

        return(
            <div className="col-5 border border-secondary rounded ml-1 p-3">
                <h1>Events</h1>
                { eventElement }
            </div>
        );
    }
}

export default Events;