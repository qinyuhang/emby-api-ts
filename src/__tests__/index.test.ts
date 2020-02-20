import axios from 'axios'
import mockAxios from 'axios'
import { EmbyConnector } from '../index'

const mockedAxios = mockAxios as jest.Mocked<typeof axios>

test('Should authenticate with Username', async () => {
  const userObj = {
    User: {
      Id: 'string'
    },
    SessionInfo: {
      UserName: 'test'
    },
    AccessToken: 'string',
    ServerId: 'string'
  }
  const resp = {data: userObj}
  mockedAxios.post.mockResolvedValue(resp)

  const emby = new EmbyConnector('http://mockedURL')
  return emby.authenticateByName(userObj.SessionInfo.UserName, 'password').then((data) => expect(data).toEqual(userObj))
})
