import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Spinner from './Spinner';
import ClientRow from './ClientRow';

const GET_CLIENTS = gql`
query getClients {
  clients{
    id
    name
    email
    phone
  }
}
`;

function Clients() {

    const { loading, error, data } = useQuery(GET_CLIENTS);

    return (
        <>
            {loading && !error && <Spinner />}
            {!loading && error && <p>Something Went Wrong</p>}
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.clients.map((client) => (
                            <ClientRow client={client} />
                        ))}
                    </tbody>
                </table>
            )}
        </>

    )
}

export default Clients;