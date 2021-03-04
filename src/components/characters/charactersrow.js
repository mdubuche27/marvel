import React from 'react'
import PropTypes from 'prop-types'

const CharactersRow = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

CharactersRow.propTypes = {
  name: PropTypes.string
}

export default CharactersRow