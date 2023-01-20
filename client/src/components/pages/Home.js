import React from 'react'
import Clients from '../Clients';
import AddClientModal from '../AddClientModal';
import Projects from "../Projects";
import AddProjectModal from '../AddProjectModal';

function Home() {
    return (
        <>
            <div className='d-flex gap-3 mb-4'>
                <AddClientModal />
                <AddProjectModal/>
            </div>

            <Projects />
            <hr />
            <Clients /></>
    )
}

export default Home;