import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Goal from './goal'

export class Goals extends Component {

    render() {

        const goalsEle = this.props.goals.map( goal => {
            return <Goal key={ goal.id } goal={ goal } />
        })

        return(
            <div>
                {goalsEle}
            </div>
        );
    }
}

export default Goals;