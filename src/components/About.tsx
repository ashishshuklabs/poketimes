import React from 'react';
import Rainbow from '../hoc/Rainbow';
const About = () =>{
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque ex odio in libero ipsum maiores ea, voluptate autem perspiciatis iusto iure culpa deserunt quam officiis iste laboriosam provident veritatis?</p>
        </div>
    );
}
//Using HOC
export default Rainbow(About);