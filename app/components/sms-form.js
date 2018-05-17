import React, {Component} from 'react';
import SMSService from '../services/sms';

export default class SMSForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            message: '',
            noPhone: false,
            noMessage: false,
            credits: 3,
            noCredits: false
        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    resetErrors() {
        this.setState({
            noPhone: false,
            noMessage: false
        });
    }

    reduceCredits() {
        this.setState({
            credits: this.state.credits - 1
        });
    }

    sendSMS(phone, message) {

        SMSService.send(phone, message)
        .then( (response) => {
            alert(`Message sent to: ${phone}`);
            this.reduceCredits();
        })
        .catch( (response) => {
            alert(`Cannot send sms.`);
            console.log(response);
        })

    }

    handleSubmit(e) {
        e.preventDefault();

        const {phone, message, credits} = this.state;
        
        this.resetErrors();

        if (credits > 0) {
    
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

            this.sendSMS(phone, message);
        }

        else {
            alert('Insufficient credits');
        }
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        if (name == 'phone' && !isNaN(value)) {
            this.setState({[name]: value});
        }

        if (name == 'message') {
            this.setState({[name]: value});
        }
    }

    render() {
        const {phone, message, noPhone, noMessage, credits} = this.state;

        return (
            <div className="jumbotron d-flex align-items-center">
                <div className="container text-center">
                    <div className="card mx-auto col-md-4">
                        <p className="text-left">
                            Credits: {credits}
                        </p>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>
                                        Phone number
                                    </label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">+63</span>
                                        </div>
                                        <input className="form-control" name="phone" value={phone} onChange={this.handleChange} placeholder="9xx-xxx-xxxx" maxlength="11"/>
                                    </div>

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