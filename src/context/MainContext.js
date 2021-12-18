import React from 'react'

const CartContext = React.createContext({
  activeTheme: 'LIGHT',
  changeTheme: () => {},
  savedVideo: [],
  reactedVideo: [],
  likedVideo: null,
  disLikedVideo: null,
  addToSaved: () => {},
  addToLiked: () => {},
  addToDisliked: () => {},
})

export default CartContext
