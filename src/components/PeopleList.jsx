import React from 'react';


const PeopleCell = ({name, homeworld, species}) =>{
  
}

const PeopleList = ({entries, onLoadMore, networkStatus}) => {
  return (
    <div>
      <ul>
        {
          entries.map(({node}) => {
           return (
             <li key={node.id}>{node.name}</li>
           )
          },onLoadMore())
        }
      </ul>
      {networkStatus === 3 ? <div>Loading</div> : null}

    </div>
  )
}

export default PeopleList;