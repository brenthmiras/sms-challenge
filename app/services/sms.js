import http from 'axios';
import urls from '../config/urls';

function send(number, message) {
    
    const data = {
        phone: number,
        message
    };

    const url = urls.SEND_SMS;

    return http({
        method: 'post',
        url,
        data
    });
}

export default {
    send
}
