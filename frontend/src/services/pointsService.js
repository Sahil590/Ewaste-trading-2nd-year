import axios from 'axios'
import { useState } from 'react'

const getPoints = (setPoints) => {
    getpoints()
        .then(res => {
            setPoints(res.data)
        })
}

const getpoints = () => {
    return axios.get('/users/0/points')
}

export default getPoints;