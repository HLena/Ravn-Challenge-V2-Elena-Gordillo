import React from 'react'
import vector from '../svg/Vector.svg'

export const PersonCell = ({node}) => {
  const {name, homeworld, species} = node;
  const specie = species ? species.name : 'Human';

  return (
    <>
      <div className="person-cell">
        <div className="person-detail">
        <h2 className="text">{name}</h2>
        <p className="text">{`${specie} from ${homeworld.name}`}</p>
        </div>
        <img src={vector} alt=""/>
      </div>
      <hr className = "line"/>
    </>
  )
}

export default PersonCell;