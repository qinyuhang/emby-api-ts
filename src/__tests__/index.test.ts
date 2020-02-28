import axios from 'axios'
import mockAxios from 'axios'
import  EmbyConnector from '../index'
import { AuthenticationAuthenticationResult } from '../models/authenticationAuthenticationResult';
import { QueryResultBaseItemDto } from '../models/queryResultBaseItemDto';

const mockedAxios = mockAxios as jest.Mocked<typeof axios>

test('Should authenticate with Username', async () => {
  const userObj: AuthenticationAuthenticationResult = {
    user: {
      id: 'string'
    },
    sessionInfo: {
      userName: 'test'
    },
    accessToken: 'string',
    serverId: 'string'
  }
  const resp = {data: userObj}
  mockedAxios.post.mockResolvedValue(resp)

  const emby = new EmbyConnector('http://mockedURL')
  return emby.authenticateByName(userObj.sessionInfo.userName, 'password').then((data) => expect(data).toEqual(userObj))
})
