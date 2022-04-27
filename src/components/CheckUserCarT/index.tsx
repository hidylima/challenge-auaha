import React from 'react'
import { Cart } from '../Cart'
import { Informative } from '../Informative'
import { User } from '../User/Index'
import { CheckUserCartContainer } from './style'

export function CheckUserCart () {
  return ( 
    <CheckUserCartContainer>
      <User />
      <Informative />
      <Cart />
    </CheckUserCartContainer>
      
  )
}
