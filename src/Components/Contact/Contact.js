import React, { Component } from 'react';

class Contact extends Component {
    state = {
        firstName: 1,
        lastName: 2,
        bestImpression: 3
    }

    appendToDom = () => {
        
    }

    render(){
        return(
            <header>
                <h2>Contact</h2>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="text" placeholder="Best Ipmression"></input>
                <button>Join Us!</button>
                <p>{this.state.firstName} {this.state.lastName} {this.state.bestImpression}</p>
                <p>Phone: 555-5555</p>
                <p>Emnail: fake@email.com</p>
            </header>
        )
    }
}

export default Contact;