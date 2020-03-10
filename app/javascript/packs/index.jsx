// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from "axios";
import GoalsForm from "../components/goals/new/GoalsForm"

class App extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render() {


        return(
            <div>
                TEST
                <GoalsForm />
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
