import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Favorite = () => {
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem('Favorite')))

    useEffect(() => {
        console.log(fav)
    })

  return (
    <div>
        <p>Favorite</p>
        {fav.map(character => (
        <div>
          <Link to={"/character/" + character.id}>{character.name}</Link>
          <button>Remove to favorite</button>
        </div>
      ))}
    </div>
  )
}

export default Favorite