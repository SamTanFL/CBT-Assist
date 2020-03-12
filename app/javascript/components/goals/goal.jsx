import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import Events from "./events"
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

        if ( this.state.visibility == true && this.state.events.length > 0 ){
            eventsEle = <Events events={ this.state.events } sendEvent={ this.props.sendEvent } />
            if ( this.state.formVisibility == true ) {
                eventForm = <EventForm goal={ this.props.goal.id } submit={ hideForm } />
            } else {
                eventForm = <button onClick={ ()=>{ this.showForm() } }>+</button>
            }
        } else if ( this.state.visibility == true && this.state.events.length == 0 ){
            eventsEle = <p>No Events Yet</p>
            if ( this.state.formVisibility == true ) {
                eventForm = <EventForm goal={ this.props.goal.id } submit={ hideForm } />
            } else {
                eventForm = <button onClick={ ()=>{ this.showForm() } }>+</button>
            }
        } else {
            eventsEle = undefined
            eventForm = undefined
        }

        return(
            <div className="border border-primary p-3">
                <div onClick={ ()=>{ this.eventsVisibility() } }>
                    <p>{ this.props.goal.title }</p>
                    <p>{ this.props.goal.description }</p>
                </div>
                { eventForm }
                { eventsEle }
            </div>
        );
    }
}

export default Goal;