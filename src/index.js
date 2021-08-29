import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('FETCH_SINGLE_MOVIE', fetchMovie); 
    yield takeEvery('CREATE_MOVIE', createMovie);
    yield takeEvery('FETCH_FEATURED', fetchAllFeatured)
}

function* fetchAllFeatured(){
    try {
        const featured = yield axios.get('/api/movie/featured');
        yield put({ type: 'SET_FEATURED', payload: featured.data  })
    } catch (error) {
        console.log('FETCH_FEATURED', error);  
    }
}

function* createMovie(action){
    try {
        const response = yield axios.post(`/api/movie`, action.payload);
        console.log('add movie', response);
        yield put({ type: 'FETCH_MOVIES'});
    } catch (error) {
        console.log('createMovie on index.js', error);
    }
}

function* fetchMovie(action) {
    try {
        const movie = yield axios.get(`/api/movie/${action.payload}`)
        console.log('get single movie', movie.data);
        yield put({ type: 'SET_SINGLE_MOVIE', payload: movie.data});
        
    } catch (error) {
        console.log('fetchMovie on index.js', error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchAllGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store single movie as an object
const movie = ( state = {}, action ) => {
    switch (action.type) {
        case 'SET_SINGLE_MOVIE':
            console.log('acc',action.payload);
            
            return action.payload[0]; // Only need the first and only row
        default:
            return state;
    }
}

// Used for conditional rendering, router.useLocation was not acting as hoped,
// global state was plan B to save time.
const page = ( state = '', action ) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.payload;
        default:
            return state;
    }
}

const featured = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_FEATURED':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        featured,
        page,
        movies,
        genres,
        movie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
