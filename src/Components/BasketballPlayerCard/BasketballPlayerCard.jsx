import React from 'react';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
    return (
        <div className=" border rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 mb-10">
            <img src={image} alt={`${name}`} className="rounded-t" />
            <div className='p-5'>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{name}</h2>
                <p className="md:text-xl font-bold">{position}</p>
                <div className="player-stats">
                    <p>Points per Game: {stats.pointsPerGame}</p>
                    <p>Assists per Game: {stats.assistsPerGame}</p>
                    <p>Rebounds per Game: {stats.reboundsPerGame}</p>
                </div>
            </div>
        </div>
    );
};

export default BasketballPlayerCard;
