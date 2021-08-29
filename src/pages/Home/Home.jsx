/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**** COMPONENTS ****/
import MovieList from '../../components/MovieList/MovieList'
import MovieDetails from '../../components/MovieDetails/MovieDetails';

/**Syling */
import { Hidden } from '@material-ui/core';
const Home = () => {

    const dispatch = useDispatch();
    const featured = useSelector(store => store.featured)

    useEffect(() => {
        
        // Set current page "No place like home.."
        dispatch({
            type: 'SET_PAGE',
            payload: 'home'
        })
        dispatch({ type: 'FETCH_FEATURED'});
    }, [])

    const getRandomFeatured = (featured) => {
        return featured[Math.floor(Math.random() * featured.length)].id
    }

    return (
        <div>
            <Hidden smDown> {/* smaller screens do not need feature */}
                <MovieDetails id={getRandomFeatured(featured)} title={'Featured Movie'}/>
                <br />
            </Hidden>
            <MovieList />
        </div>
    ) // End Home return

} // End Home()

export default Home;
