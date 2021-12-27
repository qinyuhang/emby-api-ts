import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios'
import {AuthenticateUserByName} from './models/authenticateUserByName'
import {BaseItemDto} from './models/baseItemDto'
import {AuthenticationAuthenticationResult} from './models/authenticationAuthenticationResult'
import {QueryResultBaseItemDto} from './models/queryResultBaseItemDto'
import * as camelcaseKeys from 'camelcase-keys'

export default class EmbyConnector {
  host: string
  embyAPI: AxiosInstance
  token = ''
  serverID = ''
  name = ''
  userID? = ''

  constructor(host: string) 
  constructor(host: string, token: string) 
  constructor(host: string, token?: string) {
    this.host = host
    if (token)
      this.token = token
    this.embyAPI = this.initiateEmbyAPI()
  }

  authenticateByName(name: string, password: string): Promise<AuthenticationAuthenticationResult> {
    this.name = name
    return new Promise<AuthenticationAuthenticationResult>((resolve, reject) => {
      const user: AuthenticateUserByName = {
        username: name,
        pw: password
      }
      this.embyAPI.post('/Users/AuthenticateByName', user)
      .then((response: AxiosResponse) => {
        const authResult: AuthenticationAuthenticationResult = response.data
        this.token = authResult.accessToken
        this.serverID = authResult.serverId
        this.userID = authResult.user.id
        resolve(authResult)
      }).catch((error: AxiosError) => {
        reject(error)
      })
    })
  }

  getAllMovies(): Promise<QueryResultBaseItemDto> {
    return new Promise<QueryResultBaseItemDto>((resolve, reject) =>{
      this.embyAPI.get('/Items?Recursive=true&IncludeItemTypes=Movie')
      .then((response: AxiosResponse) =>{
        const queryResult = response.data as QueryResultBaseItemDto
        resolve(queryResult)
      }).catch((error: AxiosError) => {
        reject(error)
      })
    })
  }

  getItemInfo(itemID: string): Promise<BaseItemDto> {
    return new Promise<BaseItemDto>((resolve, reject) => {
      this.embyAPI.get(`/Items/${itemID}`)
      .then((response: AxiosResponse<BaseItemDto>) =>{
        resolve(response.data)
      }).catch((error: AxiosError) => {
        reject(error)
      })
    })
  }

  private initiateEmbyAPI(): AxiosInstance {
    const headers = {
      'Content-Type': 'application/json',
      'X-Emby-Token': this.token,
      'X-Emby-Authorization': 'MediaBrowser Client="Embit", Version="4.4.0.2", Device="EmbyConnector-' + this.name + '", DeviceId="EmbyConnector-' + this.name + '"'
    }
    const emby =  axios.create({
      baseURL: this.host + '/emby',
      headers,
    })
    emby.interceptors.response.use((response) =>{
      response.data = camelcaseKeys(response.data, {deep: true})
      return response
    }, (error) => {return error})
    return emby
  }
}
