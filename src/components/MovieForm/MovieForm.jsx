/**** SYSTEM ****/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**** COMPONENTS ****/

/**** STYLING ****/
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, ButtonGroup, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    forms:{
        '& > *': {
            margin: theme.spacing(1),
            width:'95%',
        },
    },
}));

const MovieForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
       dispatch({ type: 'FETCH_GENRES'})
    }, [])
    

    // For initial State and clearing form if nessary.
    let movieTemplate = {
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    }

    // Local and Global State
    const genres = useSelector(store => store.genres);
    const [newMovie, setNewMovie] = useState(movieTemplate);


    const handleChange = (event) => {
        //Set local state object programicly....
        setNewMovie({...newMovie, [event.target.name]:event.target.value});
    }
    
    let addNewMovie = (event) => {
        event.preventDefault();
        dispatch({
            type: "CREATE_MOVIE",
            payload: newMovie
        });
        history.push('/');
    }

    return (
        <Paper style={{ padding: 5}}>
            <form
                className={classes.forms}
                autoComplete="off" 
                noValidate 
                onSubmit={addNewMovie}
            >
                <TextField 
                    required
                    name="title" 
                    label="Title" 
                    variant="outlined" 
                    value={newMovie.title} 
                    onChange={handleChange} 
                />
                <TextField 
                    required
                    name="poster" 
                    label="Poster URL" 
                    variant="outlined" 
                    value={newMovie.poster} 
                    onChange={handleChange} 
                />
                <TextField 
                    required
                    name="description" 
                    label="Description" 
                    variant="outlined"
                    multiline
                    minRows ="10"
                    value={newMovie.description} 
                    onChange={handleChange} 
                />
                <FormControl
                    required
                    variant="outlined"
                >
                    <InputLabel>Genre</InputLabel>
                    <Select
                        name="genre_id"
                        onChange={handleChange}
                        value={newMovie.genre_id}
                        label="Genre"
                    >
                    {genres.map((genre)=>(
                        <MenuItem
                            key={genre.id}
                            value={genre.id}
                        >
                            {genre.name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <ButtonGroup
                    variant="contained"
                >
                    <Button 
                        color="primary"
                        onClick={() => history.push('/')}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </ButtonGroup>
            </form>
        </Paper>
    )
}

export default MovieForm;
