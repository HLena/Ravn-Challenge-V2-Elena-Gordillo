import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';


// import Main from '../view/Main'
import LoadingCell from '../components/LoadingCell'
import NoticeCell from '../components/NoticeCell'
import PeopleList from '../components/PeopleList';
// import PersonCell from './PersonCell';
// import {DataCell, SectionHeader }from '../components/DataCell'


const PEOPLE_QUERY = gql`
  query People($cursor: String){
    allPeople(first:5, after: $cursor){
      edges{
        node{
          id
          name
          species{
            name
          }
          homeworld{
            name
          }
          vehicleConnection{
            vehicles{
              name
            }
          }
        }
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
  }
`;

const GetAllPeople = () => {
  const { 
    data, 
    fetchMore, 
    loading, 
    error,
    networkStatus}   = useQuery(PEOPLE_QUERY);
  
  const onLoadMore = () => {
    fetchMore({
      variables:{
        cursor: data.allPeople.pageInfo.endCursor
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        const newEdges = fetchMoreResult.allPeople.edges;
        const pageInfo = fetchMoreResult.allPeople.pageInfo;

        return newEdges.length ? {
          allPeople: {
            __typename: prev.allPeople.__typename,
            edges: [...prev.allPeople.edges,...newEdges],
            pageInfo
          }
        }: prev;
      }
    })
  }
  
  return (
    <aside className="people-container">
      { loading ? <LoadingCell/> : 
        ( error ? <NoticeCell/> :
        ( 
          <PeopleList
            networkStatus={networkStatus}
            entries={data.allPeople.edges || []}
            onLoadMore = {onLoadMore}
          />
        ))
      }
    </aside>
  )
};

export default GetAllPeople;





