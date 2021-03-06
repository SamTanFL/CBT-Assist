import React, { Component } from "react";
import axios from 'axios';

export class EventForm extends Component {

    constructor(){
        super()
        this.state = {
            title: "",
            description: "",
            thoughts: "",
            feelings: "",
            behaviours: "",
            goal: ""

        }
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(event) {
        let valueName = event.target.name;
        this.setState( { [ valueName ] : event.target.value } );
    }

    submitInput(){
        let goal = this.props.goal
        this.state.goal = goal
        let data = this.state
        console.log(data)
        axios.post( '/events', data, { headers: { 'X-Transaction': 'POST Example', 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') } } )
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
            this.props.submit()
        this.setState( { title : "", description: "", thoughts: "", feelings: "", behaviours: "" } )
    }

    render() {

        console.log("EVENT FORM IS RENDERING")

        return(
            <div className="border-top border-secondary rounded p-3 col-12">
                <h3>Create New Event</h3><br />
                <label>Title :</label><br />
                <input class ="rounded" class ="rounded" type="text" placeholder="Title" value={ this.state.title } onChange={ this.handleValueChange } name="title" /><br />
                <label>Description :</label><br />
                <input class ="rounded" type="text-field" placeholder="Description" value={ this.state.description } onChange={ this.handleValueChange } name="description" /><br />
                <label>Thoughts :</label><br />
                <input class ="rounded" type="text-field" placeholder="Thoughts" value={ this.state.thoughts } onChange={ this.handleValueChange } name="thoughts" /><br />
                <label>Feelings :</label><br />
                <input class ="rounded" type="text-field" placeholder="Feelings" value={ this.state.feelings } onChange={ this.handleValueChange } name="feelings" /><br />
                <label>Behaviours :</label><br />
                <input class ="rounded" type="text-field" placeholder="Behaviours" value={ this.state.behaviours } onChange={ this.handleValueChange } name="behaviours" /><br />
                <input type="hidden" value={ this.state.goal } name="goal" />
                <button class="mt-2" onClick={ ()=>{ this.submitInput() } }>Submit</button>
                <button class="mt-2" onClick={ ()=>{ this.props.submit() } }>Cancel</button>
            </div>
        );
    }

}

export default EventForm;