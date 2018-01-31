import HttpClient from './core/http';
import Interfaces from './interfaces';
import {isDefined} from './core/helpers';


export class Client {
    constructor(options) {
        options = isDefined(options) ? options : {};

        this.token = options.token || null;

        // Construct http client
        this.http = new HttpClient(this);

        // Construct interfaces
        this._interfaces = this._constructInterfaces();
    }

    get user() {
        return this._interfaces['user'];
    }

    submitListens(type, listens) {
        if(!isDefined(type) || ['single', 'playing_now', 'import'].indexOf(type) < 0) {
            throw new Error('Invalid value provided for the "type" parameter');
        }

        if(!isDefined(listens) || !Array.isArray(listens)) {
            throw new Error('Invalid value provided for the "listens" parameter');
        }

        // Send request
        return this.http.post('submit-listens', {
            authenticated: true,

            body: {
                'listen_type': type,
                'payload': listens
            }
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.payload)) {
                return body.payload;
            }

            return null;
        });
    }

    _constructInterfaces() {
        var result = {};

        Object.keys(Interfaces).forEach((key) => {
            result[key] = new Interfaces[key](this);
        });

        return result;
    }
}
