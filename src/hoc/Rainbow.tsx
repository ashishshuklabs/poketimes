import React, { ComponentType } from 'react';

const Rainbow = <T extends object>(WrappedComponent:ComponentType<T>) =>{
    const colors = ['red', 'green', 'blue','yellow','pink','purple'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';
    return (props:T) => {
        return (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>

        )};
}

export default Rainbow;