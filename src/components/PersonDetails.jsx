import { gql, useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import React from 'react'

import LoadingCell from '../components/LoadingCell'
import DataCell from '../components/DataCell'
import SectionHeader from '../components/SectionHeader'


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
  const {
    data,
    loading,
    error} = useQuery(PERSON_QUERY,{ variables: {id: id }})
  if (loading) return <main className="container"><LoadingCell/></main>;
  if (error) return <main className="container"></main>;
    const {
      eyeColor,
      hairColor,
      skinColor,
      birthYear,
      vehicleConnection:{vehicles},
    } = data.person;
  return (
    <main className="container">
      {
            <>
            <SectionHeader text={"General Information"}/>
            <DataCell title={"EyeColor"} value={eyeColor}/>
            <DataCell title={"HairColor"} value={hairColor}/>
            <DataCell title={"SkinColor"} value={skinColor}/>
            <DataCell title={"BirthColor"} value={birthYear}/>
            { (vehicles.length > 0) ? 
              <SectionHeader text={"Vehicles"}/>
              : null}
            {vehicles.map((vehicle) => (
              <DataCell key={vehicle.name} title={vehicle.name} value={''}/>
            ))}
            </>
      }
    </main>      
  )
}

export default withRouter(PersonDetails);

