import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../queries/projectQueries';

import ClientInfo from '../ClientInfo';
import DeleteProjectButton from '../DeleteProjectButton';
import EditProjectForm from '../EditProjectForm';

function Project() {

    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

    return (

        <>
            {loading &&  <Spinner />}
            {!loading &&  error && <p>Something Went Wrong</p>}

            {!loading && !error && (
                <div className='mx-auto w-75 card p-5'>
                    <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
                        Back
                    </Link>

                    <h1>{data.project.name}</h1>
                    <p>{data.project.description}</p>

                    <h5 className='mt-3'>Project Status</h5>
                    <p className='lead'>{data.project.status}</p>
                    <ClientInfo client={data.project.client} />
                    <DeleteProjectButton projectId={data.project.id}/>
                    <EditProjectForm project={data.project}/>


                </div>
            )}
        </>

    )
}

export default Project