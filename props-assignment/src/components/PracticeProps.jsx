import React from 'react';
import ppCSS from './PracticeProps.module.css';

function practiceProps(props) {
    return (
        <div className={ppCSS.card}>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <img src={props.imgurl} alt='' width="200px" height="200px" />
        </div>
    )
}

export default practiceProps