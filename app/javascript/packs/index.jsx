// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from "axios";
import Goals from "./goals"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            goals: [],
            events: []
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
        axios.get('/events.json')
                .then( (response) => {
                    const data = response.data
                    this.setState( { events: data } )
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

    render() {

        const goalsCb = () => {
            this.getGoals()
        }

        return(
            <div className="mt-5 row">
                <Goals goals= { this.state.goals } getGoals={ goalsCb } />
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