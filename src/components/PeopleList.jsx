import React from 'react';
import PersonCell from './PersonCell'

import { Link } from 'react-router-dom';

const PeopleList = ({entries, onLoadMore, networkStatus,loading}) => {
  return (
    <>
        {
          entries.map(({node}, idx) => {
            return (
            <Link className="link" key={idx} to={`/${node.id}`}>
              <PersonCell 
                key={node.id} 
                node={node}
                />
            </Link>
          
            )},onLoadMore())
        }
    </>
  )
}

export default PeopleList;