import axios from 'axios';
import { popularGamesURL } from '../api';

// Action Creator

export const loadGames = () => async (dispatch) => {
    // fetch axios
    const popularData = await axios.get(popularGamesURL())
    dispatch({
        type: 'FETCH_Games',
        payload: {
            popular: popularData,
        }
    })
}

