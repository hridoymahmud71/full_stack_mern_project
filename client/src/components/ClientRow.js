import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from './../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECT, GET_PROJECTS } from '../queries/projectQueries';


function ClientRow({ client }) {

    const [deleteClient] = useMutation(DELETE_CLIENT,
        {
            variables: { id: client.id },
            // you can either refetch the list or update the cache
            refetchQueries: [{query:GET_CLIENTS},{query:GET_PROJECTS}]
        })

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className='btn btn-danger btn-sm' >
                    <FaTrash onClick={deleteClient} />
                </button>
            </td>
        </tr>
    )
}

export default ClientRow;