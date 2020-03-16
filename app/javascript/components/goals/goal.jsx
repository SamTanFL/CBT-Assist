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

    deleteGoal(){
        axios.delete( '/goals', { params: { id: this.props.goal.id } } )
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
        const refresh = () => this.props.deleteGoal()
        setTimeout(function(){refresh()}, 100)
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
                eventForm = <button class="m-2" onClick={ ()=>{ this.showForm() } }>+</button>
            }
        } else if ( this.state.visibility == true && this.state.events.length == 0 ){
            eventsEle = <p>No Events Yet</p>
            if ( this.state.formVisibility == true ) {
                eventForm = <EventForm goal={ this.props.goal.id } submit={ hideForm } />
            } else {
                eventForm = <button class="m-2" onClick={ ()=>{ this.showForm() } }>+</button>
            }
        } else {
            eventsEle = undefined
            eventForm = undefined
        }

        return(
            <div className="border-top border-secondary bg-light rounded">
                <span className="float-right border rounded p-2 bg-white mr-1 mt-1" onClick={ ()=>{ this.deleteGoal() } } >Del</span>
                <div className="p-3" onClick={ ()=>{ this.eventsVisibility() } }>
                    <p>Goal :</p>
                    <p>{ this.props.goal.title }</p>
                    <p>Description :</p>
                    <p>{ this.props.goal.description }</p>
                </div>
                { eventForm }
                { eventsEle }
            </div>
        );
    }
}

export default Goal;