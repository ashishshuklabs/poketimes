import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
//Get typings for the router props.
const Contact:React.FC<RouteComponentProps> = (Props) =>{
    //See all supported props.
    console.log(Props)
    return (
        <div className="container">
            <h4 className="center">Contact
        </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque ex odio in libero ipsum maiores ea, voluptate autem perspiciatis iusto iure culpa deserunt quam officiis iste laboriosam provident veritatis?</p>
        </div>
    );
}
export default Contact;