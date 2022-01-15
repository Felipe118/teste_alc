import api from '../utils/api'

import { useState, useEffect } from 'react'

export default function useCalc(){

    async function calculo(imc) {
        try {

            const data = await api.post('/imc/salve',imc)
            .then((res)=>{
                return console.log( res.data)
               
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    // async function list(params) {
    //     try {
    //         const data
    //     } catch (error) {
            
    //     }
    // }

    return {calculo}
}

// const data = await api
//       .post(`pets/create`, formData, {
//         headers: {
//           Authorization: `Bearer ${JSON.parse(token)}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((response) => {
//         console.log(response.data)
//         return response.data
//       })
//       .catch((err) => {
//         console.log(err)
//       })