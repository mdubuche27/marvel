import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../pagination/pagination'
import privatekey from '../secret/secret'
import md5 from 'md5'
import { useHistory, Link } from 'react-router-dom'

const Characters = () => {
  const valueOffset = 20
  const [currentPage, setCurrentPage] = useState([])
  const [total, setTotal] = useState([])
  const [characters, setCharacters] = useState([])
  const history = useHistory()

  useEffect(() => {
    const url = 'http://gateway.marvel.com/v1/public/characters'
    const publickey = 'ea89c3a1f43ae55b9fc927f3cd71138f'
    const timstamp = new Date().getMilliseconds()
    const hash =  md5(`${timstamp}${privatekey}${publickey}`)

    axios({
      method: 'GET',  
      url: url,
      params: {
        ts: timstamp,
        apikey: publickey,
        hash: hash,
        offset: valueOffset * currentPage
      }
    })
      .then(res => {
        console.log(res.data.data.results)
        setCharacters(res.data.data.results)
        setTotal(res.data.data.total)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPage])

  const handleFavorite = (hero) => {
    //localStorage.removeItem('Favorite')
    const currentFavorite = localStorage.getItem('Favorite') ? JSON.parse(localStorage.getItem('Favorite')) : []
    const isPresent = currentFavorite.map(f => f.id).indexOf(hero.id)
    if(isPresent === -1){
      currentFavorite.push(hero)
    }
    else{
      currentFavorite.splice(isPresent, 1);
    }
    localStorage.setItem('Favorite', JSON.stringify(currentFavorite))
    console.log(localStorage.getItem('Favorite'))
  }

  return (
    <div>
      <p>Marvel characters</p>
      {characters.map(character => (
        <div>
          <Link to={"/character/" + character.id}>{character.name}</Link>
          <button onClick={() => handleFavorite({id: character.id, name: character.name})}>Add to favorite</button>
        </div>
      ))}
        <Pagination
          total={total}
          setCurrentPage={setCurrentPage}
          valueOffset={valueOffset}
        ></Pagination>
    </div>
  )
}

export default Characters