import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])
    const {loading, data} = useFetchGifs(category);
    

    return (
        <>
        <h2 className="animate__animated animate__fadeIn">{category}</h2>
        {loading && <p>Loading... </p>}
       
        <div className="card-grid">
            

            {data.map( img => (
                <GifGridItem 
                key={img.id}
                { ...img } 
                //img={img}
                />
            ))}
           
        </div>
        </>
    )
}

GifGrid.propTypes={
    category: PropTypes.string.isRequired

}