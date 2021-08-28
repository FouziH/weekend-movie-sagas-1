/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**** COMPONENTS ****/

/**** STYLING ****/
import { Box, Grid, Typography } from '@material-ui/core';

//{match:{params:{name}}} was vital/imporant/nessasary research
// I wanted this kind of routing for bookmarks, and independant operation.
// It is not dependant on another page to source the ID, just the url(route)
// in my experance - advanced users demand this. they will often remember the id
// and go directly to the url.

const Details = ({match:{params:{id}}}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: id
        })
    }, [])

    const movie = useSelector(store => store.movie);
    console.log('shit',movie.genres);
    return (
        <div>
            {movie.title}
            {movie.description}
            <img 
                src={movie.poster} 
                alt={movie.title}
            />
            {movie.genres.map((genre) => (
                <p>{genre}</p>
            ))}
        </div>
    )
}

export default Details;
