  
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharactersRow from './charactersrow'
import privatekey from '../secret/secret'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const url = 'http://gateway.marvel.com//v1/public/characters'
    const publickey = ''
    const timstamp = New Date().getmilliseconds()

    axios({
      method: 'GET',
      url: url
    })
      .then(res => {
        console.log(res)
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <p>Harry Potter</p>
      {characters.map(character => (
        <CharactersRow
          key={character.name}
          name={character.name}
        ></CharactersRow>
      ))}
    </div>
  )
}

export default Characters