// define what data will look like

const initState = {
    popular: [],
    newGames: [],
    upcoming: []
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return { ...state }
        default:
            return { ...state }
    }
}

// action




export default gamesReducer