require('dotenv').config();
const axios = require('axios');
const api ={
    createProject: (userInput) => {
        return axios.post('/create-project', userInput)
    }
};