import avios from 'axios'

const api = axios create({
    baseURL: 'http://localhost:3000/api',
})

export const insertScore = payload => api.post('/score, payload')
export const getAllScores = () => payload => api.get('/scores')
export const updateScoreById = (id, payload) => api.put('/score/${id}, payload')
export const deleteScoreById = id => api.delete('/score/${d}')
export const getScoreById = id => api.get('/score/${id}')

const apis = {
    insertScore,
    getAllScores,
    updateScoreById,
    deleteScoreById,
    getScoreById,
}

export default apis