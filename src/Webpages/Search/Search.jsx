import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { InputField, ImageSlider, apiComponents, PosterGallery, Footer } from '../../components';
import axios from 'axios';
import './Search.scss';

const Search = () => {

    const [trendingToday, setTrendingToday] = useState([]);
    // const [discoverMovies, setDiscoverMovies] = useState([]);
    const [discoverTV, setDiscoverTV] = useState([]);
    const[isTyping, setIsTyping] = useState(false);
    const[inputText, setInputText] = useState('');
    const[searchTVResults, setSearchTVResults] = useState([]);
    const[searchMovieResults, setSearchMovieResults] = useState([]);

    useEffect(() => {

        axios
        .get(`${apiComponents[0]}${apiComponents[2].trending}/day?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setTrendingToday(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&language=en-US&page=1&primary_release_date.gte=2016&sort_by=popularity.desc`)
        .then((res)=> {
            setDiscoverTV(res.data.results)
        })
        .catch(error => { console.log(error) })

    },[]);


    useEffect(() => {

        if(inputText !== ""){
            axios
            .get(`${apiComponents[0]}${apiComponents[2].search}/tv?api_key=${apiComponents[1]}&language=en-US&query=${inputText}&page=1&include_adult=false`)
            .then((res)=> {
                setSearchTVResults(res.data.results)
                // console.log(res.data.results)
            })
            .catch(error => { console.log(error) })

            axios
            .get(`${apiComponents[0]}${apiComponents[2].search}/movie?api_key=${apiComponents[1]}&language=en-US&query=${inputText}&page=1&include_adult=false`)
            .then((res)=> {
                setSearchMovieResults(res.data.results)
                // console.log(res.data.results)
            })
            .catch(error => { console.log(error) })
        }

    },[inputText]);

    const errorOutput = `
        Your search for "${inputText}" did not have any matches.

        Suggestions:
        
            * Try different keywords
            * Try using a movie, name or tv show name
    `;



    const randIndexGenerator = (maxValue, indexCount) => {
        let randArray =[];

        while(randArray.length < indexCount){
            let randNum = Math.floor(Math.random() * maxValue);
            if(randArray.indexOf(randNum) === -1) randArray.push(randNum);
        }

        return randArray;
    };


    return (
        <Box id="search-page">
            <InputField updateTyping={setIsTyping} setInput={setInputText} />
            { !isTyping && <ImageSlider randIndexes={randIndexGenerator(20, 5)} shows={trendingToday}/> }
            { !isTyping && <PosterGallery medias={discoverTV} title={"Discover"} className = {"poster-gallery"}/> }

            {
                isTyping && searchMovieResults.length > 0 &&  searchTVResults.length > 0 &&
                <>
                    <PosterGallery medias={searchTVResults} title={"Tv Search Results"} className = {"poster-gallery"}/> 
                    <PosterGallery medias={searchMovieResults} title={"Movie Search Results"} className = {"poster-gallery"}/> 
                </>
                
            }

            { isTyping && searchTVResults.length === 0 && <PosterGallery medias={searchTVResults} title={"Tv Search Results"} className = {"poster-gallery"} errorMessage={errorOutput}/>  }
            { isTyping && searchMovieResults.length === 0 && <PosterGallery medias={searchMovieResults} title={"Movie Search Results"} className = {"poster-gallery"} errorMessage={errorOutput}/>  }
            <Footer/>
        </Box>
    )
}

export default Search
