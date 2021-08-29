/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

/**** COMPONENTS ****/
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const Details = () => {

    
    const dispatch = useDispatch();
    let { id } = useParams(); // originally used {match:{params:{id}}} until I found this.

    useEffect(() => {
        //Set current page on
        dispatch({
            type: 'SET_PAGE',
            payload: 'details'
        })

    }, [])

    return (
        <MovieDetails id={id}/>
    ) // End Details return

} // End Details()

export default Details;
