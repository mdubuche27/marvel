  
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import privatekey from '../secret/secret'
import md5 from 'md5'

const Character = () => {
  const [characters, setCharacters] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const url = 'http://gateway.marvel.com/v1/public/characters/' + id
    const publickey = 'ea89c3a1f43ae55b9fc927f3cd71138f'
    const timstamp = new Date().getMilliseconds()
    const hash =  md5(`${timstamp}${privatekey}${publickey}`)

    axios({
      method: 'GET',  
      url: url,
      params: {
        ts: timstamp,
        apikey: publickey,
        hash: hash
      }
    })
      .then(res => {
        console.log(res.data.data.results)
        setCharacters(res.data.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
        <p>{characters[0].name}</p>
    </div>
  )
}

export default Character