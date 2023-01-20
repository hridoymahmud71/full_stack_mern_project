import React from 'react'
import Clients from '../Clients';
import AddClientModal from '../AddClientModal';
import Projects from "../Projects";

function Home() {
    return (
        <>
            <div className='d-flex gap-3 mb-4'>
                <AddClientModal />
            </div>

            <Projects />
            <hr />
            <Clients /></>
    )
}

export default Home