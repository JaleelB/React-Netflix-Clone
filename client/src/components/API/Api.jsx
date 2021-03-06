const apiComponents = [
    "https://api.themoviedb.org/3",
    "df7dbf24a32b1fff30834fc68ab0ce25",
    {//endpoints
        movie: "/movie",
        tv: "/tv",
        discover: '/discover',
        // top_rated: "/movie/top_rated",
        popular: "/movie/popular",
        now_playing: "/movie/now_playing",
        on_tv: "/tv/on_the_air",
        trending: "/trending/all",
        discover_movie: "/discover/movie",
        discover_tv: "/discover/tv",
        originals: `/discover/tv?api_key=df7dbf24a32b1fff30834fc68ab0ce25&with_networks=213`,
        search: '/search',
        latest_movie: '/movie/latest',
        upcoming_movie: '/movie/upcoming',
        list: '/list',
        top_rated: '/top_rated',
        tv_airing: '/airing_today',
        tv_popular: '/popular',
        tv_trending: '/trending/tv/day',
        movie_trending: '/trending/movie/day'
    },
    [
        {28: 'Action' },        
        {12: 'Adventure'},
        {16: 'Animation'},
        {35: 'Comedy'},
        {80: 'Crime'},
        {99: 'Documentary'},
        {18: 'Drama'},
        {10751: 'Family'},
        {14: 'Fantasy'},
        {36: 'History'},
        {27: 'Horror'},
        {10402: 'Music'},
        {10749: 'Romance'},
        {878: 'Science Fiction'},
        {10770: 'TV Movie'},
        {53: 'Thriller'},
        {10752:'War'},
        {37: 'Western'},
        {10759: 'Action & Adventure'},
        {10762: 'Kids'},
        {9648: 'Mystery'},
        {10763:'News'},
        {10764:'Reality'},
        {10765:'Sci-Fi & Fantasy'},
        {10766: 'Soap'},
        {10767: 'Talk'},
        {10768: 'War & Politics'}
    ]
]; 

export default apiComponents;


//'878|99|36|10763'
