/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/**** COMPONENTS ****/
import MovieList from '../../components/MovieList/MovieList'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        // Set current page "No place like home.."
        dispatch({
            type: 'SET_PAGE',
            payload: 'home'
        })

    }, [])

    return (
        <div>
            <MovieList />
        </div>
    ) // End Home return

} // End Home()

export default Home;
