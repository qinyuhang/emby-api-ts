import axios from './node_modules/axios/index'

export interface IUser {
    Username: string,
    Pw: string
}

export class User implements IUser {
    Username: string
    Pw: string

    constructor(user: IUser) {
        this.Username = user.Username
        this.Pw = user.Pw
    }
}

export interface IEmbyConnector {
    name: string,
    host: string
}

export class EmbyConnector implements IEmbyConnector {
    name: string
    host: string

    constructor(ebmbyConnector: IEmbyConnector) {
        this.name = ebmbyConnector.name
        this.host = ebmbyConnector.host
    }

    authenticateByName(username: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const headers = {
                'Content-Type': 'application/json',
                'X-Emby-Authorization': 'MediaBrowser Client="Embit", Version="4.4.0.2", Device="EmbyConnector-' + this.name + '", DeviceId="EmbyConnector-' + this.name + '"'
            }

            const user = new User({
                Username: username,
                Pw: password
            })

            axios({
                method: 'POST',
                headers,
                url: this.host + '/emby/Users/AuthenticateByName',
                data: user
            }).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error);
            })
        })
    }
}