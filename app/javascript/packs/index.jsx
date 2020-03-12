// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from "axios";
import Goals from "../components/goals/goals"
import Events from "../components/events/events"


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            goals: [],
            events: [],
            event: undefined
        }
    }

    componentDidMount(){
        axios.get('/goals.json')
                .then( (response) => {
                    const data = response.data
                    this.setState( { goals: data } )
                }).catch( ( error ) => {
                    console.log( error );
                } )
    }

    getGoals() {
        axios.get('/goals.json')
                .then( (response) => {
                    const data = response.data
                    this.setState( { goals: data } )
                }).catch( ( error ) => {
                    console.log( error );
                } )
    }

    setEvent(event) {
        this.setState( { event } )
    }

    clearEvent() {
        this.setState( { event: undefined } )
    }

    render() {

        const goalsCb = () => this.getGoals()

        const eventLifter = (event) => this.setEvent(event)

        const eventClearer = () => this.clearEvent()

        return(
            <div className="mt-5 row">
                <Goals goals= { this.state.goals } getGoals={ goalsCb } sendEvent={ eventLifter } />
                <Events events= { this.state.events } event= { this.state.event } eventClearer={ eventClearer } />
            </div>
        );
    }
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.querySelector(".container").appendChild(document.createElement('div')),
    )
})