import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Goal extends Component {

    render() {

        console.log("Goal is RENDERING")

        return(
            <div>
                <p>{ this.props.goal.title }</p>
                <p>{ this.props.goal.description }</p>
            </div>
        );
    }
}

export default Goal;