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
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});
    }

    render() {
        const {phone, message} = this.state;

        return (
            <div className="jumbotron d-flex align-items-center">
                <div className="container text-center">
                    <div className="card mx-auto col-md-4">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>
                                        Phone number
                                    </label>
                                    <input className="form-control" name="phone" value={phone} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Message
                                    </label>
                                    <textarea className="form-control" name="message" value={message} onChange={this.handleChange}></textarea>
                                </div>

                                <button className="btn btn-primary btn-block">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}