import React, { useContext } from 'react'
import { HomeContext } from '../context/HomeContext'

const Home = () => {
  const { name } = useContext(HomeContext)
  console.log(name)
  return (
    <div>{name}</div>
  )
}

export default Home