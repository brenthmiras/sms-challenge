import React, {Component} from 'react'

export default class SMSForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            message: ''
        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const {phone, message} = this.state;
        
        /* TODO:  do something with phone and message */
    }

    handleChange(e) {
        const target = e.target;
        const name   = target.name;
        const value  = target.value;

        this.setState({
            [name] : value
        });
    }

    render() {
        const {phone, message} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Phone number
                    </label>
                    <input name="phone" value={phone} onChange={this.handleChange}/>
                    <label>
                        Message
                    </label>
                    <textarea name="message" value={message} onChange={this.handleChange}></textarea>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}