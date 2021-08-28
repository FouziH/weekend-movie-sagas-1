/**** SYSTEM ****/
import React from 'react';
import { useDispatch } from 'react-redux';

/**** COMPONENTS ****/

/**** STYLING ****/
import { Paper, TextField, Button } from '@material-ui/core';
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
    return (
        <Paper style={{ padding: 5}}>
            <form
                autoComplete="off" 
                noValidate 
                onSubmit={addNewPlant}
            >
                <TextField 
                    name="name" 
                    label="Name" 
                    variant="outlined" 
                    value={newPlant.name} 
                    onChange={handleNameChange} 
                />
                <Button></Button>
            </form>
        </Paper>
    )
}

export default MovieForm;
