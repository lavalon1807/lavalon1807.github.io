import React from 'react'

const sort = (props) => {
  const {items, rating, onclick} = props

  const active = rating === items ? 'places__option--active' : ''

  return(
  <>
    <li className={`places__option ${active}`}  tabIndex="0" onClick={onclick}>{items}</li>
   </>
  )
}

export default sort
