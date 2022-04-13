import { Box } from '@mui/material';
import React  from 'react';
import MediaPoster from './MediaPoster';
import '../../containers/MediaRow/MediaRow.scss';
import {useRowPopupPropsContext} from '../../RowPropsContext';


const MediaRow = ({ medias, netflixOriginal, typeMedia, className, disableHover, rowTabIndex }) => {

    // const [posterWidth, setPosterWidth] = useState(0);
    
    // const posterRef = useRef(null);
    // const rowContainerRef = useRef(null);

    // const { setRowPadding, setContainerWidth, setTotalPostersInView, totalPostersInView, posterWidth } = popupProps;


    // const { setPosterWidth, distance } = popupProps

    // useEffect(()=>{
    //     const rowPadding = window.getComputedStyle(rowContainerRef.current).getPropertyValue('padding-left');
    //     const rowPaddingValue = Number(rowPadding.substring(0, rowPadding.length - 3));
    //     const rowContainerWidth = wrapperRef.current.clientWidth - (rowPaddingValue * 2);

    //     setContainerWidth(Math.floor(rowContainerWidth));
    //     setRowPadding(Math.floor(rowPaddingValue));
    //     setTotalPostersInView(Math.floor(rowContainerWidth / posterWidth));

        
    // },[posterWidth, wrapperRef.current ]);  

    // const rowPopupProps = useRowPopupPropsContext();
    // const { rowTabIndex } = rowPopupProps.rowPopupProps;


    return (

        <Box 
            className={`media-row ${className ? className: ''}`}
            // ref={posterRowRef}
            sx={{transform: `translate3d(calc(${rowTabIndex} * -100%), 0px, 0px)`}}
        >
            {
                medias && medias.map((media, index) => {   
                    
                    return <MediaPoster
                                // updatePosterWidth = {setPosterWidth}
                                // posterRef={posterRef}
                                key={media.id}
                                posterPath = {media?.poster_path}
                                name = {media?.name ? media?.name : media?.title}
                                genreIDs = {media?.genre_ids}
                                backdrop = {media?.backdrop_path}
                                // popupProps = {popupProps}
                                index = {index}
                                airDate={media?.first_air_date ? media?.first_air_date : media?.release_date}
                                rating={media?.vote_average}
                                id={media?.id}
                                // wrapperRef={wrapperRef}
                                // fullscreenProps = {fullscreenProps}
                                typeMedia={typeMedia ? typeMedia : media?.media_type}
                                disableHover={disableHover}
                                netflixOriginal={netflixOriginal}
                            />
                                
                })   
            }
        </Box>
  
    )
}

export default MediaRow;


