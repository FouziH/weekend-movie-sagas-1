/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
/**** COMPONENTS ****/

/**** STYLING ****/

import MovieList from '../../components/MovieList/MovieList'
const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'SET_PAGE',
            payload: 'home'
        })
    }, [])

    return (
        <div>
            <MovieList />
        </div>
    )
}

export default Home;
