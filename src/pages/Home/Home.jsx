/**** SYSTEM ****/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**** COMPONENTS ****/
import MovieList from '../../components/MovieList/MovieList'
import MovieDetails from '../../components/MovieDetails/MovieDetails';

/**Syling */
import { Hidden } from '@material-ui/core';
const Home = () => {

    const dispatch = useDispatch();
    const [edit, setEdit] = useState(true)
    const featured = useSelector(store => store.featured);

    useEffect(() => {
        
        // Set current page "No place like home.."
        dispatch({
            type: 'SET_PAGE',
            payload: 'home'
        })

    }, [])

    console.log(featured);

    return (
        <div>
            <Hidden smDown> {/* smaller screens do not need feature */}
                <MovieDetails id={5} title={'Featured Movie'}/>
                <br />
            </Hidden>
            <MovieList />
        </div>
    ) // End Home return

} // End Home()

export default Home;
