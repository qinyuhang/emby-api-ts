import axios, { AxiosResponse, AxiosInstance } from 'axios'

export interface IUser {
  Username: string;
  Pw: string;
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
  name: string;
  host: string;
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
      const user = new User({
        Username: username,
        Pw: password
      })
      const emby = this.initiateEmbyAPI()
      emby.post('/Users/AuthenticateByName', user)
      .then((response: AxiosResponse<any>) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error);
      })
    })
  }

  private initiateEmbyAPI(): AxiosInstance {
    return axios.create({
      baseURL: this.host + '/emby',
      headers: {
        'Content-Type': 'application/json',
        'X-Emby-Authorization': 'MediaBrowser Client="Embit", Version="4.4.0.2", Device="EmbyConnector-' + this.name + '", DeviceId="EmbyConnector-' + this.name + '"'
      }
    })
  }
}
