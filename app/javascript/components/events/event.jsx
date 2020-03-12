import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

export class Event extends Component {

    constructor(){
        super()
        this.state={
            event: {}
        }
    }

    componentDidMount(){
        let id = this.props.event.id
        let event
        const axiosFunc = ()=>{
            axios.get('/events.json', { params: { id } })
            .then( (response) => {
                let event = response.data
                this.setState( { event } )
            }).catch( ( error ) => {
                console.log( error );
            } )
        }
        setTimeout(function(){axiosFunc()}, 500)
    }

    render() {

        return(
            <div className="border border-primary p-3">
                <button className="float-right" onClick={ ()=>{ this.props.eventClearer() } } >X</button>
                <p>Event:</p>
                <p>{ this.state.event.title }</p>
                <p>Description:</p><p>{ this.state.event.description }</p>
                <p>Thoughts:</p><p>{ this.state.event.thoughts }</p>
                <p>Feelings:</p>
                <p>{ this.state.event.feelings }</p>
                <p>Behaviours:</p><p>{ this.state.event.behaviours }</p>
                <button onClick={()=>{ this.props.editing() } } >Edit</button>
                <button>Delete</button>
            </div>
        );
    }
}

export default Event;