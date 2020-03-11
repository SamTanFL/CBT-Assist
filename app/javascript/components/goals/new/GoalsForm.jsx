import React, { Component } from "react";
import axios from 'axios';

export class GoalsForm extends Component {

    constructor(){
        super()
        this.state = {
            title: "",
            description: ""
        }
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(event) {
        let valueName = event.target.name;
        this.setState( { [ valueName ] : event.target.value } );
    }

    submitInput(){
        let data = this.state
        axios.post( '/goals', data, { headers: { 'X-Transaction': 'POST Example', 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') } } )
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
        this.setState( { title : "", description: "" } )
        this.props.func1()
        this.props.func2()
    }

    render() {

        return(
            <div>
                <label>Create New Goal :</label><br />
                <input type="text" placeholder="Title" value={ this.state.title } onChange={ this.handleValueChange } name="title" /><br />
                <label>Description :</label><br />
                <input type="text-field" placeholder="Description" value={ this.state.description } onChange={ this.handleValueChange } name="description" />
                <button onClick={ ()=>{ this.submitInput() } }>Submit</button>
            </div>
        );
    }

}

export default GoalsForm;