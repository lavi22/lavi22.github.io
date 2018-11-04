import React from 'react';
// import img from '../../images/img1.PNG';

const Product = ({movie}) => (

    <div className="ProductLine" >
        <div className="ProductBox">
            <img height="300" src={movie.imageUrl} />
            <h4> {movie.title}  </h4>
            <p> {movie.year}  </p>
        </div>
    </div>
)

export default Product;