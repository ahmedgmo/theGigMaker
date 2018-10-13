require('dotenv').config()
const axios = require('axios')
const api = {
    createProject: (userInput) => {
            return axios.post('/api/create-project', userInput)
    },

    getdbProjects: () => {
        return axios.get('/api/get-dbprojects')
    }
}

export default api
