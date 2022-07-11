import {useState, useEffect} from 'react';
import axios from 'axios';

const ResidentInfo = ({ residentUrl }) => {
    
    const [characterUrl, setCharacterUrl] = useState({});

    useEffect(() => {
       axios.get(residentUrl)
            .then(res => {
                setCharacterUrl(res.data)
            })

    }, []);


    console.log(characterUrl)
    return (
        <li className='resident'>
            <h2>{characterUrl.name}</h2>
            <img src={characterUrl.image} alt="" style={{maxWidth: "200px"}}/>
            <h3>Status: {characterUrl.status}</h3>
            <h3>Origin: {characterUrl.origin?.name}</h3>
            <h3>Episodes in Which Appears: {characterUrl.episode?.length}</h3>
        </li>
    );
};

export default ResidentInfo;