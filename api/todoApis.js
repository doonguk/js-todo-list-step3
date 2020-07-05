import { METHOD, request, requestWithReturn } from './default.js'
import { API_URL } from '../utils/constants.js'

const api = (() => {
  return {
    createTodo({ teamId, memberId, contents }) {
      return request(
        API_URL + `/api/teams/${teamId}/members/${memberId}/items`,
        METHOD.POST({ contents })
      )
    },
  }
})()

export default api