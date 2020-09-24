import React from 'react'
import GetAllPeople from '../graphql/queries'
import '../styles/Main.css'

export const Main = () => {
  return (
    <>
      <nav className="nav-bar">
      <h2>People of Stars  Wars</h2>
      </nav>
      <aside className="people-container">
        <GetAllPeople/>
      </aside>
      <main className="container"></main>
      
    </>
  )
}

export default Main;