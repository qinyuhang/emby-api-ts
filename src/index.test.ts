import axios from 'axios'
import mockAxios from 'axios'
import { EmbyConnector } from './index'
const mockedAxios = mockAxios as jest.Mocked<typeof axios>

test('Should authenticate with Username', async () => {
  const emby = new EmbyConnector({name: 'PlaceHolder', host:'http://mockedURL'})
  const userObj = {SessionInfo: {UserName: 'test'}}
  const resp = {data: userObj}
  mockedAxios.post.mockResolvedValue(resp)

  return emby.authenticateByName('test', 'password').then((data) => expect(data).toEqual(userObj))
})
