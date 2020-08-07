import axios from 'axios'

export const allSites = (data) => axios.get('https://mock.yonyoucloud.com/mock/14285/data/allSites', { params: data })
