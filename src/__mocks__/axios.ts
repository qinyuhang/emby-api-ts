import axios from 'axios'
const mockAxios : typeof axios= jest.genMockFromModule('axios')

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios
