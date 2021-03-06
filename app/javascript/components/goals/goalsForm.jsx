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

    cancel(){
        this.props.func1()
    }

    render() {

        return(
            <div className="col border-top border-secondary p-3 form-group">
                <label>Create New Goal :</label><br />
                <input className="form-control" type="text" placeholder="Title" value={ this.state.title } onChange={ this.handleValueChange } name="title" /><br />
                <label>Description :</label><br />
                <textarea className="form-control" type="textarea" rows="3" placeholder="Description" value={ this.state.description } onChange={ this.handleValueChange } name="description"></textarea><br />
                <button onClick={ ()=>{ this.submitInput() } }>Submit</button>
                <button onClick={ ()=>{ this.cancel() } }>Cancel</button>
            </div>
        );
    }

}

export default GoalsForm;