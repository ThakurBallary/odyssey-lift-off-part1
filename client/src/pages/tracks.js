import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import QueryResult from '../components/query-result';
import TrackCard from '../containers/track-card';

/**
 * Tacks Page is Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

/** TRACKS query to retrieve all tracks */
export const TRACKS = gql`
 query getTracks {
   tracksForHome {
     id
     title
     thumbnail
     length
     modulesCount
     author {
       name
       photo
     }
   }
 }
`;

const Tracks = () => {

  const { loading, error, data } = useQuery(TRACKS);
  
  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  </Layout>
};

export default Tracks;
