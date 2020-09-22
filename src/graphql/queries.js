import React from 'react';
import { useQuery, gql } from '@apollo/client';


const ALL_PEOPLE = gql`
  {
    allPeople{
      people{
        id
        name
        gender     
      }
    }
  }
`;

const GetAllPeople = () => {
  const {loading, error, data }= useQuery(ALL_PEOPLE);
  if (loading) return <p> Loading...</p>;
  if (error) return <p> Error :(</p>;
  return (
    <>
      <h2>My first Apollo app <span role='img' aria-label='spaceships'>🚀</span></h2>
      {
        data.allPeople.people.map(({ id, name }) => (
          <div key={id} style={{background:"yelow", margin:".3em"}}>
            <p>
              {id}: {name}
            </p>
        </div>
        ))
      }
    </>
  )
};
export default GetAllPeople;
