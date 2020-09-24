import React from 'react';
import { gql, useQuery } from '@apollo/client';

import PeopleList from '../components/PeopleList'

const PEOPLE_QUERY = gql`
  query People($cursor: String){
    allPeople(first:5, after: $cursor){
      edges{
        node{
          id
          name
          gender
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
  const { data, fetchMore, loading, networkStatus}   = useQuery(
    PEOPLE_QUERY);

  if (loading) return <p>Loading...</p>

  return (
    <PeopleList
      networkStatus={networkStatus}
      entries={data.allPeople.edges || []}
      onLoadMore = { () =>
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
            }
          : prev;
          }
        })
      }
    />
  )
};

export default GetAllPeople;





