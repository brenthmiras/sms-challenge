import React, {Component} from 'react'

export default class SMSForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            message: '',
            noPhone: false,
            noMessage: false
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

        this.setState({
            noPhone: false,
            noMessage: false
        });

        const {phone, message} = this.state;

        if (!phone) {
            this.setState({
                noPhone: true
            });
        }

        if (!message) {
            this.setState({
                noMessage: true
            });
        }

        /* TODO:  do something with phone and message */
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});
    }

    render() {
        const {phone, message, noPhone, noMessage} = this.state;

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

                                    <ErrorMessage shown={noPhone} text={'Phone number is required!'}/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Message
                                    </label>
                                    <textarea className="form-control" name="message" value={message} onChange={this.handleChange}></textarea>
                                    <ErrorMessage shown={noMessage} text={'Message is required!'}/>
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

function ErrorMessage (props) {
    const {shown, text} = props;

    if (shown) {
        return (
            <small className="text-danger">{text}</small>
        );
    }

    else {
        return '';
    }
}