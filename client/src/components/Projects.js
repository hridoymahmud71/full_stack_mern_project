import React from 'react';
import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import ProjectCard from './ProjectCard';
import { GET_PROJECTS } from '../queries/projectQueries';

function Projects() {

    const { loading, error, data } = useQuery(GET_PROJECTS);

    return (
        <>
            {loading && <Spinner/>}
            {!loading && error && <p>Something Went Wrong</p>}

            {!loading && !error && data.projects.length > 0 &&
                <div className='row mt-4'>
                    {data.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>}
            {!loading && !error && data.projects.length == 0 &&
                <p>No Projects</p>}

        </>
    )
}

export default Projects;