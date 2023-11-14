import React from 'react'

const CartContext = React.createContext({
  input: '',
  optionName: '',
  Add: () => {},
})

export default CartContext
