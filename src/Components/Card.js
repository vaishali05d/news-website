import React from 'react';

const Card = ({ data }) => {
    console.log(data);

    return (
        <div className='cardContainer'>
            {data.map((curItem, index) => {
                if (!curItem.urlToImage) {
                    return null;
                } else {
                    return (
                        <div className='card' key={index}>
                            <img 
                                alt={curItem.title || 'News Image'} 
                                src={curItem.urlToImage} 
                            />
                            <div className='content'>
                                <a 
                                    className='title' 
                                    href={curItem.url} 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                >
                                    {curItem.title}
                                </a>
                                <p>{curItem.description}</p>
                                <button 
                                    onClick={() => window.open(curItem.url, '_blank', 'noopener,noreferrer')}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Card;
