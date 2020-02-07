import axios from './node_modules/axios/index';
export class User {
    constructor(user) {
        this.Username = user.Username;
        this.Pw = user.Pw;
    }
}
export class EmbyConnector {
    constructor(ebmbyConnector) {
        this.name = ebmbyConnector.name;
        this.host = ebmbyConnector.host;
    }
    authenticateByName(username, password) {
        return new Promise((resolve, reject) => {
            const headers = {
                'Content-Type': 'application/json',
                'X-Emby-Authorization': 'MediaBrowser Client="Embit", Version="4.4.0.2", Device="EmbyConnector-' + this.name + '", DeviceId="EmbyConnector-' + this.name + '"'
            };
            const user = new User({
                Username: username,
                Pw: password
            });
            axios({
                method: 'POST',
                headers,
                url: this.host + '/emby/Users/AuthenticateByName',
                data: user
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
