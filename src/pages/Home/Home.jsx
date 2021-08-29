/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/**** COMPONENTS ****/
import MovieList from '../../components/MovieList/MovieList'
import MovieDetails from '../../components/MovieDetails/MovieDetails';

/**Syling */
import { Hidden } from '@material-ui/core';
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
            <Hidden smDown> {/* smaller screens do not need feature */}
                <MovieDetails id={4} title={'Featured Movie'}/>
                <br />
            </Hidden>
                
                
            
            <MovieList />
        </div>
    ) // End Home return

} // End Home()

export default Home;
