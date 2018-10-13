import React, { Component } from 'react'

export default class NewStudentForm extends Component {

    render(){
        return (
            <form>
                <label>Firstname</label>
                <input type='text' name='firstName'/>

                <label>Lastname</label>
                <input type='text' name='lastName'/>

                <label>Email</label>
                <input type='email' name='email'/>

                <button>Submit</button>
            </form>
        
        )
    }
}