import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Goal from './goal'
import GoalsForm from './goalsForm'

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

    componentDidMount(){
        this.setState( { goals: this.props.goals } )
    }

    displayForm() {
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
            this.setState( { display: { goals: false, goalsForm: false } } )
        }
    }

    render() {

        const passingFunc1 = () => this.displayForm()

        let goalsForm
        let goalsEle

        if ( this.state.display.goals == false ) {
            goalsEle = <p className="ml-2" >^ Click to Show Your Goals</p>
            goalsForm = undefined
        } else {
            if ( this.state.display.goalsForm == false ) {
                    goalsForm = <span className="border-top border-left border-right border-dark m-2 p-1 rounded bg-light" onClick={ ()=>{ this.displayForm() } }>Add Goal</span>
            } else {
                    goalsForm = <GoalsForm func1={ passingFunc1 } func2={ this.props.getGoals } />
            }
            goalsEle = this.state.goals.map( goal => {
            return <Goal key={ goal.id } goal={ goal } sendEvent={ this.props.sendEvent } deleteGoal={ this.props.deleteGoal } />
            })
        }

        return(
            <div className="col-5 border bg-light border-secondary rounded p-0 goals">
                <h1 className="p-3" ><span onClick={ ()=>{ this.displayGoals() } } >Goals</span></h1>
                {goalsForm}
                {goalsEle}
            </div>
        );
    }
}

export default Goals;