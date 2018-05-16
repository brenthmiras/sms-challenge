import React, { Component } from 'react'

export default class SMSForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Message
                    </label>
                    <textarea></textarea>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}