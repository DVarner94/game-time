// define what data will look like

const initState = {
    popular: [],
    newGames: [],
    upcoming: []
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return { ...state, popular: payload.popular }
        default:
            return { ...state }
    }
};




export default gamesReducer