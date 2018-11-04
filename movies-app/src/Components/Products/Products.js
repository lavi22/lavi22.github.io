import React from 'react';
import axios from 'axios';
import Product from './Product';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount () {

        axios.get('http://www.mocky.io/v2/5bdf5be931000032169e401e')
        .then(res => {
            this.setState(() => ({ movies: res.data }))
        });
    }

    render() {
        return (
            <div className="container">
                {
                    
                    this.state.movies.map((movie, i) =>

                        <Product key={i} movie={movie} index={i} />
                    )
                }
            </div>
        );
    }
}

export default Products;
