import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import Events from "../../events/events"
import EventForm from "../../events/eventForm"

export class Goal extends Component {

    constructor(){
        super()
        this.state = {
            events: [],
            visibility: false,
            formVisibility: false
        }
    }

    eventsVisibility(){
        if (this.state.visibility == false){
            axios.get('/events.json', { params: { goal: this.props.goal.id } })
                .then( (response) => {
                    let events = response.data
                    this.setState( { events, visibility: true } )
                }).catch( ( error ) => {
                    console.log( error );
                } )
        } else {
            this.setState( { events: [], visibility: false })
        }
    }

    showForm(){
        this.setState( { formVisibility: !this.state.formVisibility } )
    }


    render() {

        console.log("Goal is RENDERING")

        let eventsEle

        if ( this.state.visibility == true && this.state.events.length > 0 ){
            eventsEle = <Events events={ this.state.events } />
        } else if ( this.state.visibility == true && this.state.events.length == 0 ){
            eventsEle = <p>No Events Yet</p>
        } else {
            eventsEle = undefined
        }

        let eventForm
        let cancel

        if ( this.state.formVisibility == true ){
            eventForm = <EventForm goal={ this.props.goal.id } />
            cancel = <button onClick={ ()=>{ this.showForm() } }>Cancel</button>
        } else {
            eventForm = <button onClick={ ()=>{ this.showForm() } }>Add Event</button>
            cancel = undefined
        }

        return(
            <div>
                <div onClick={ ()=>{ this.eventsVisibility() } }>
                    <p>{ this.props.goal.title }</p>
                    <p>{ this.props.goal.description }</p>
                    { eventsEle }
                </div>
                { eventForm }
                { cancel }
            </div>
        );
    }
}

export default Goal;