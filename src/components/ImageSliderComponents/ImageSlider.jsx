import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from "react-slick"; 
import ImageSliderBackdrop from './ImageSliderBackdrop';
import {MediaRowTitle} from '../../components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.scss';


const ImageSlider = ({randIndexes, shows}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <>
            <MediaRowTitle title={"Trending Searches"}/>
            <Slider {...settings}>
                {
                    randIndexes.map((randIndex)=>{
                        return <ImageSliderBackdrop key={randIndex} index={randIndex} movie={shows[randIndex]}/>
                    })
                }
            </Slider>
        </>
    )
}

export default ImageSlider
