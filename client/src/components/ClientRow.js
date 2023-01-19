import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from './../mutations/clientMutations';


function ClientRow({ client }) {

    const [deleteClient] = useMutation(DELETE_CLIENT, { variables: { id: client.id } })

    return (
        <tr key={client.id}>
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