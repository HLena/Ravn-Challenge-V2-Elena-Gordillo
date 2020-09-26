import React from 'react'

import Header from '../components/Header';
import GetAllPeople from '../components/PeopleListQuery'
import PersonDetails from '../components/PersonDetails';

import '../styles/Main.scss';

export const Main = () => {
  return (
    <>
      <Header/>
      <GetAllPeople/>
      <PersonDetails/>
    </>
  )
}

export default Main;