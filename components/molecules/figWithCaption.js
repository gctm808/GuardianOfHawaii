import React from 'react';
import '../../css/styles.css';

const FigWithCaption = (props) => {
    const fig = {
        img: props.img,
        title: props.title,
        caption: props.caption
    };
 
    return (
        <figure className="c-figure">
            <div className="c-figure__media">
                <img src={require(`../../images/${fig.img}`)} alt="Landscape" className="" />
            </div>
            <figcaption className="c-figure__caption"><span className='captionTitle'>{fig.title}</span><br /><br />{fig.caption}</figcaption>
        </figure>
    );
};

export default FigWithCaption;