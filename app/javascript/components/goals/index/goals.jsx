import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Goal from './goal'
import GoalsForm from '../new/GoalsForm'

export class Goals extends Component {

    constructor() {
        super()
        this.state = {
            goals: [],
            display: {
                goals: false,
                goalsForm: false
            }
        }
    }

    displayForm() {
        console.log("THIS IS HAPPENING")
        if ( this.state.display.goalsForm == false ) {
            this.setState( { display: { goals: this.state.display.goals, goalsForm: true } } )
        } else {
            this.setState( { display: { goals: this.state.display.goals, goalsForm: false } } )
        }
    }

    displayGoals() {
        if ( this.state.display.goals == false ) {
            this.props.getGoals()
            this.setState( { goals: this.props.goals, display: { goals: true, goalsForm: this.state.display.goalsForm } } )
        } else {
            this.setState( { display: { goals: false, goalsForm: this.state.display.goalsForm } } )
        }
    }

    render() {

        const passingFunc = ()=> this.displayForm()

        let goalsForm

        console.log("RENDERING GOALS", this.state.display.goalsForm)

        if ( this.state.display.goals == false ) {
            goalsForm = undefined
        } else if ( this.state.display.goals == true && this.state.display.goalsForm == false ) {
            goalsForm = <button onClick={ ()=>{ this.displayForm() } }>Add Goal</button>
        } else if ( this.state.display.goals == true && this.state.display.goalsForm == true ) {
            goalsForm = <GoalsForm func1={ passingFunc } func2={ this.props.getGoals } />
        }

        let goalsEle

        if ( this.state.display.goals == false ) {
            goalsEle = undefined
        } else if ( this.state.display.goals == true ) {
            goalsEle = this.state.goals.map( goal => {
            return <Goal key={ goal.id } goal={ goal } />
            })
        }

        return(
            <div>
                <h1 onClick={ ()=>{ this.displayGoals() } } >Goals</h1>
                {goalsForm}
                {goalsEle}
            </div>
        );
    }
}

export default Goals;

/*
        const goalsEle = this.state.goals.map( goal => {
            return <Goal key={ goal.id } goal={ goal } />
        })
*/