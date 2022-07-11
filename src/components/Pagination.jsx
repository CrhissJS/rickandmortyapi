import React, { useState } from 'react';

const Pagination = ({page, setPage, max, index, setIndex}) => {

   

    const nextPage = () => {
        if(index === max){
            alert("No more pages")
        }else{
            setIndex(index + 1)
            setPage(page + 1);
        }
    }

    const previousPage = () => {
        if(index === 1){
            alert("No more pages")
        }else{
            setIndex(index - 1)
            setPage(page - 1);
        }
    }

    return (
        <div className='container-pagination'>
            <button onClick={previousPage} >Prev</button>
            <p>{index} de {max}</p>
            <button onClick={nextPage}>Next</button>
        </div>
    );
};

export default Pagination;