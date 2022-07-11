import { useState, useEffect } from 'react';
import axios from 'axios';
import Location from './Location';


const RickAndMorty = () => {

    const [index, setIndex] = useState(1);

    const [page, setPage] = useState(1);

    const [perPage, setPerPage] = useState(4);

    const [location, setLocation] = useState({});

    const [searchValue, setSearchValue] = useState("");

    const random = Math.floor(Math.random() * 126) + 1;

    useEffect(() => {

        axios
            .get(`https://rickandmortyapi.com/api/location/${random}`)
            .then((res) => {
                setLocation(res.data)
            });

    }, []);


    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then((res) => {
                setLocation(res.data)
                setIndex(1)
                setPage(1)
            });
        
    }

    console.log(location)

    return (
        <div>
            <header className='header'>
            </header>
            <input style={{border: "none", marginTop: "20px",background: "white", width: "800px", textAlign: "center", fontSize: "20px"}}type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="PUT A LOCATION FROM RICK AND MORTY UNIVERSE!" />
            <button className='search' onClick={searchLocation} style={{width: "40px", height: "20px", background: "green", cursor: "pointer"}}></button>
            <Location location={location} index={index} setIndex={setIndex} page={page} perPage={perPage} setPage={setPage} setPerPage={setPerPage}/>

        </div>
    );
};

export default RickAndMorty;