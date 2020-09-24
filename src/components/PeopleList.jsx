import React from 'react';

const PeopleList = ({entries, onLoadMore, networkStatus}) => {
  return (
    <div>
      <h2>People List</h2>
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