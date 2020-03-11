import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import Events from "./events/events"
import EventForm from "./eventForm"

export class Goal extends Component {

    constructor(){
        super()
        this.state = {
            events: [],
            visibility: false,
            formVisibility: false
        }
    }

    componentDidMount(){
        axios.get('/events.json', { params: { goal: this.props.goal.id } })
                .then( (response) => {
                    let events = response.data
                    this.setState( { events } )
                }).catch( ( error ) => {
                    console.log( error );
                } )
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
            this.setState( { visibility: false })
        }
    }

    showForm(){
        this.setState( { formVisibility: !this.state.formVisibility } )
    }


    render() {

        const hideForm = () => {
            this.showForm()
        }

        let eventsEle
        let eventForm
        let cancel

        /*if ( this.state.formVisibility == true ){
            eventForm = <EventForm goal={ this.props.goal.id } submit={ hideForm } />
            cancel = <button onClick={ ()=>{ this.showForm() } }>Cancel</button>
        } else {
            eventForm = <button onClick={ ()=>{ this.showForm() } }>Add Event</button>
            cancel = undefined
        }*/

        if ( this.state.visibility == true && this.state.events.length > 0 ){
            eventsEle = <Events events={ this.state.events } />
            if ( this.state.formVisibility == true ) {
                eventForm = <EventForm goal={ this.props.goal.id } submit={ hideForm } />
                cancel = <button onClick={ ()=>{ this.showForm() } }>Cancel</button>
            } else {
                eventForm = <button onClick={ ()=>{ this.showForm() } }>Add Event</button>
                cancel = undefined
            }
        } else if ( this.state.visibility == true && this.state.events.length == 0 ){
            eventsEle = <p>No Events Yet</p>
            if ( this.state.formVisibility == true ) {
                eventForm = <EventForm goal={ this.props.goal.id } submit={ hideForm } />
                cancel = <button onClick={ ()=>{ this.showForm() } }>Cancel</button>
            } else {
                eventForm = <button onClick={ ()=>{ this.showForm() } }>Add Event</button>
                cancel = undefined
            }
        } else {
            eventsEle = undefined
            eventForm = undefined
            cancel = undefined
        }

        return(
            <div className="border border-primary">
                <div onClick={ ()=>{ this.eventsVisibility() } }>
                    <p>{ this.props.goal.title }</p>
                    <p>{ this.props.goal.description }</p>
                </div>
                { eventForm }
                { cancel }
                { eventsEle }
            </div>
        );
    }
}

export default Goal;