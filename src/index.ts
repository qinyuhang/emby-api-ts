import axios, { AxiosResponse, AxiosInstance } from 'axios'
import {AuthenticateUserByName} from './models/authenticateUserByName'

export class EmbyConnector {
  host: string
  embyAPI: AxiosInstance
  token = ''
  serverID = ''
  name = ''
  userID = ''

  constructor(host: string) {
    this.host = host
    this.embyAPI = this.initiateEmbyAPI()
  }

  authenticateByName(name: string, password: string): Promise<any> {
    this.name = name
    return new Promise<any>((resolve, reject) => {
      const user: AuthenticateUserByName = {
        Username: name,
        Pw: password
      }
      this.embyAPI.post('/Users/AuthenticateByName', user)
      .then((response: AxiosResponse<any>) => {
        this.token = response.data.AccessToken
        this.serverID = response.data.ServerId
        this.userID = response.data.User.Id
        this.embyAPI.defaults.headers['X-Emby-Token'] = this.token
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }

  getAllMovies(): Promise<any> {
    return new Promise<any>((resolve, reject) =>{
      this.embyAPI.get(`/Users/${this.userID}/Items?Recursive=true&IncludeItemTypes=Movie`)
      .then((response: AxiosResponse<any>) =>{
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }

  getItemInfo(itemID: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.embyAPI.get(`/Users/${this.userID}/Items/${itemID}`)
      .then((response: AxiosResponse<any>) =>{
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
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

