// Base url
const base_url = 'https://api.rawg.io/api/';

// get month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
};

// get day
const getCurrentDay = () => {
    const day = new Date().getDate() + 1;
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
};

// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentMonth}/${currentDay}/${currentYear}`;
const lastYear = `${currentMonth}/${currentDay}/${currentYear - 1}`;
const nextYear = `${currentMonth}/${currentDay}/${currentYear + 1}`;

// Popular games
const popular_games = `games?dates${lastYear},${currentDate}&ordering=-rating$page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`;

