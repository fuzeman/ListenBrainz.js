import Merge from 'lodash-amd/merge';
import QueryString from 'querystring';

import {isDefined} from './helpers';


export default class HttpClient {
    constructor(client, baseUrl) {
        this._client = client;
        this._baseUrl = baseUrl || 'https://api.listenbrainz.org/1/';
    }

    get(path, options) {
        options = Merge({
            params: {},

            authenticated: false,
            token: this._client.token
        }, options || {});

        // Set request headers
        let headers = new Headers();

        if(options.authenticated) {
            if(!isDefined(options.token)) {
                throw new Error('Missing required "token" parameter');
            }

            headers['Authorization'] = 'Token ' + options.token;
        }

        // Send request
        return fetch(this._baseUrl + path + '?' + QueryString.encode(options.params), {
            headers: headers
        }).then(function(response) {
            // TODO check status code
            return response.json();
        });
    }

    post(path, options) {
        options = Merge({
            body: null,

            authenticated: false,
            token: this._client.token
        }, options || {});

        // Encode body to JSON
        if(isDefined(options.body)) {
            options.body = JSON.stringify(options.body);
        }

        // Set request headers
        let headers = {};

        if(options.authenticated) {
            if(!isDefined(options.token)) {
                throw new Error('Missing required "token" parameter');
            }

            headers['Authorization'] = 'Token ' + options.token;
        }

        // Send request
        return fetch(this._baseUrl + path, {
            method: 'POST',
            body: options.body,

            headers: new Headers(headers)
        }).then(function(response) {
            // TODO check status code
            return response.json();
        });
    }
}
