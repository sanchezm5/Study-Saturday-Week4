import React, { Component } from 'react';
import Axios from 'axios';

export default class NewStudentForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        return this.setState({
            [event.target.name] : event.target.value,
        })
    }

    async handleSubmit(event) {
        event.preventDefault()
        try {
            this.setState({
                firstName: '',
                lastName: '',
                email: ''
            })
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        console.log(this.state)
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
            First Name:
            <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName}/>
            </label>

            <label>
            Last Name:
            <input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName}/>
            </label>

            <label>
            Email:
            <input onChange={this.handleChange} type="email" name="email" value={this.state.email}/>
            </label>

            <button type="submit">Submit New Student</button>
        </form>
        );
    }
}
