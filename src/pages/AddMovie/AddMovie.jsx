/**** SYSTEM ****/
import React from 'react';
import { useDispatch } from 'react-redux';

/**** COMPONENTS ****/
import MovieForm from '../../components/MovieForm/MovieForm';

/**** STYLING ****/
import { Box } from '@material-ui/core';

const AddMovie = () => {

    const dispatch = useDispatch();
    
    // For bar menu option ( in this case none - may be subject to change )
    dispatch({
        type: 'SET_PAGE',
        payload: 'add-movie'
    })

    return (
        <Box>
            <MovieForm />
        </Box>
    )
}

export default AddMovie;
