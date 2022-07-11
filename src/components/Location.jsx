import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import ResidentInfo from './ResidentInfo';

const Location = ({ location, index, setIndex, page, setPage, perPage, setPerPage }) => {

    const max = Math.floor(location.residents?.length / perPage )+ 1;

    console.log(max)

    return (
        <div>
            <div className='title'>
                <h2>{location.name}</h2>
                <div className="container-subtitle">
                    <h3>type: {location.type}</h3>
                    <h3>dimesion: {location.dimension}</h3>
                    <h3>population: {location.residents?.length}</h3>
                </div>
            </div>

            

            <div>
                <ul className='container-residents'>
                    {location.residents?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                    .map(residentUrl => (
                        <ResidentInfo key={residentUrl} residentUrl={residentUrl}/>
                    ))}
                </ul>
                <Pagination page={page} setPage={setPage} perPage={perPage} setPerPage={setPerPage} max={max} index={index} setIndex={setIndex} />
            </div>
        </div>
    );
};

export default Location;