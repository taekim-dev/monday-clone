const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const {response} = require("express");

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://5022e91b-c16b-412c-b52b-80bbd60e2184-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:naCSjANrHhkauoskwkFpnxNp:0a2cc6f55e94a756569a9beb78bc78c1ae440be366389c252775481c2c6bc3b5'

app.get('/tickets', async (req, res) => {
    const options ={
        method: 'GET',
        headers:{
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    }catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})


app.post('/tickets', async(req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers:{
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }

})


app.listen(PORT, () => console.log('server running on PORT' + PORT))