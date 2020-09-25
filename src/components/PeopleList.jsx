import React from 'react';
import PersonCell from './PersonCell'

const PeopleList = ({entries, onLoadMore, networkStatus}) => {
  return (
    <>
        {
          entries.map(({node}) => {
           return (
             <PersonCell 
              key={node.id} 
              node={node}
              />
           )
          },onLoadMore())
        }
      {networkStatus === 3 ? <div>Loading</div> : null}

    </>
  )
}

export default PeopleList;