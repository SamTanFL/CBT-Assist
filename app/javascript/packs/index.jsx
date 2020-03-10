// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from "axios";
import GoalsForm from "../components/goals/new/GoalsForm"
import Goals from "../components/goals/index/goals"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            goals: []
        }
    }

    getGoals() {
        axios.get('/goals.json')
                .then( (response) => {
                    let goals = []
                    const data = response.data
                    for (const index in data) {
                        goals.push(data[index])
                    }
                    this.setState( { goals } )
                }).catch( ( error ) => {
                    console.log( error );
                } )
    }

    render() {

        const goalsFormCb = () => {
            this.getGoals()
        }

        return(
            <div>
                <GoalsForm func={ goalsFormCb } />
                <button onClick={ ()=>{this.getGoals()} } >Show Goals</button>
                <Goals goals= { this.state.goals } />
            </div>
        );
    }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
