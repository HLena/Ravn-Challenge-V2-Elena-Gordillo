import { gql, useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import React from 'react'

import LoadingCell from '../components/LoadingCell'
import NoticeCell from '../components/NoticeCell'
import {DataCell, SectionHeader }from '../components/DataCell'


const PERSON_QUERY = gql`
  query Person($id: ID){
    person(id: $id){
      eyeColor
      hairColor
      birthYear
      skinColor
      vehicleConnection{
        vehicles{
          name
        }
      }
    }     
}`;

const PersonDetails = ({match:{params:{id}}}) => {
  // const idPerson = id ? id : null;
  const {
    data,
    loading,
    error} = useQuery(PERSON_QUERY,{variables: {id: id }})
  return (
    <main className="container">
      {
        loading ? <LoadingCell/> : 
        ( error ? <NoticeCell/> :
          (
            <>
            <SectionHeader text={"General Information"}/>
            <DataCell title={"EyeColor"} value={data.person.eyeColor}/>
            <DataCell title={"HairColor"} value={data.person.hairColor}/>
            <DataCell title={"SkinColor"} value={data.person.skinColor}/>
            <DataCell title={"BirthColor"} value={data.person.birthYear}/>
            { data.vehicleConnection && <div>hola</div>}
            </>
          )
        )
      }
    </main>      
  )
}

export default withRouter(PersonDetails);
// export default PersonDetails;
