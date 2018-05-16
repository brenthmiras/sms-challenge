import React, {Component} from 'react'

export default class SMSForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const {message} = this.state;

        /* TODO:  */
    }

    handleChange(e) {
        const value = e.target.value;
        
        this.setState({
            message: value
        });
    }

    render() {
        const {message} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Phone number
                    </label>
                    <input/>
                    <label>
                        Message
                    </label>
                    <textarea
                        value={message}
                        onChange={this.handleChange}>
                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}