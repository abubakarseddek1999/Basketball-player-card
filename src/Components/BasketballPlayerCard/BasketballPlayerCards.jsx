import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';

const BasketballPlayerCards = () => {

    const players = [
        {
            name: "LeBron James",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Forward",
            stats: {
                pointsPerGame: 25.4,
                assistsPerGame: 7.1,
                reboundsPerGame: 10.5
            }
        },
        {
            name: "Stephen Curry",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Guard",
            stats: {
                pointsPerGame: 30.1,
                assistsPerGame: 6.7,
                reboundsPerGame: 5.3
            }
        },
        {
            name: "Kevin Durant",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Forward",
            stats: {
                pointsPerGame: 28.9,
                assistsPerGame: 5.2,
                reboundsPerGame: 7.1
            }
        },
        {
            name: "James Harden",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Guard",
            stats: {
                pointsPerGame: 25.5,
                assistsPerGame: 8.2,
                reboundsPerGame: 6.6
            }
        },
        {
            name: "Giannis Antetokounmpo",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Forward",
            stats: {
                pointsPerGame: 27.1,
                assistsPerGame: 5.9,
                reboundsPerGame: 11.2
            }
        },
        {
            name: "Kawhi Leonard",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Forward",
            stats: {
                pointsPerGame: 24.8,
                assistsPerGame: 4.9,
                reboundsPerGame: 6.7
            }
        },
        {
            name: "Luka Dončić",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Guard",
            stats: {
                pointsPerGame: 28.3,
                assistsPerGame: 8.7,
                reboundsPerGame: 8.5
            }
        },
        {
            name: "Anthony Davis",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Forward",
            stats: {
                pointsPerGame: 24.1,
                assistsPerGame: 3.0,
                reboundsPerGame: 10.4
            }
        },
        {
            name: "Damian Lillard",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Guard",
            stats: {
                pointsPerGame: 25.7,
                assistsPerGame: 6.2,
                reboundsPerGame: 4.3
            }
        },
        {
            name: "Nikola Jokić",
            image: "https://i.postimg.cc/kGbzTC8D/1-Ion-RHf-Fs-Hvu-Vf42-XOe0-Vw.jpg",
            position: "Center",
            stats: {
                pointsPerGame: 26.4,
                assistsPerGame: 8.3,
                reboundsPerGame: 10.8
            }
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto pt-5">
            {players.map((player, index) => (
                <BasketballPlayerCard
                    key={index}
                    name={player.name}
                    image={player.image}
                    position={player.position}
                    stats={player.stats}
                />
            ))}
        </div>
    );
};

export default BasketballPlayerCards;