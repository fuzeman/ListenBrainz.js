import Interface from './base';
import {isDefined} from '../core/helpers';


export default class UserInterface extends Interface {
    listens(username, params) {
        if(!isDefined(username)) {
            throw new Error('Invalid value provided for the "username" parameter');
        }

        // Send request
        return this.http.get('user/' + username + '/listens', {
            params: params
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.payload)) {
                return body.payload;
            }

            return null;
        });
    }
}
