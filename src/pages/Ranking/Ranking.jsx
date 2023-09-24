import './Ranking.css';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackgroundRanking from '../../components/BackgroundRanking/BackgroundRanking';

import ellipse from '../../assets/ellipse.svg';
import miniEllipse from '../../assets/mini-ellipse.svg';

export default function Ranking() {
    const [users, setUsers] = useState();
    let rankPosition = 1;

    useEffect(() => {
        api.get('/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.error(`Erro: ${error}`));
    }, []);

    function sortUsers(users) {
        return users?.sort((a, b) => b.points - a.points);
    }

    return (
        <div>
            <Header />
            <main>
                <BackgroundRanking />
                <div id='ranking-container'>
                    <h1>RANKING</h1>
                    <h3>Sua pontuação atual:</h3>
                    <p>500pts</p>
                    <div id='highlights-of-week'>
                        <h3>Destaques da semana:</h3>
                        <div id='highlight-board'>
                            {sortUsers(users)?.map((user) => (
                                <div key={user.id} id='person-highlight'>
                                    <img
                                        className='ellipse'
                                        src={ellipse}
                                        alt='person face image'
                                    />
                                    <p className='name'>{user.name}</p>
                                    <p className='stack'>[{user.field}]</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div id='line'>
                    <hr />
                </div>
                <div id='ranks'>
                    <div id='top-ten-container'>
                        <h3>Top 10 [Design]</h3>
                        <div id='top-ten-board'>
                            {sortUsers(users)?.map(
                                (user) =>
                                    user.field.toLowerCase() == 'design' && (
                                        <div key={user.id} className='person-top-design'>
                                            <p className='number-rank'>{rankPosition++}º</p>
                                            <img src={miniEllipse} alt='person face image' />
                                            <p className='full-name-rank'>{user.name}</p>
                                            <p className='points-rank'>{user.points}pts</p>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                    <div id='ranks-stack-and-week-container'>
                        <div id='rank-per-stack-container'>
                            <h3>Os melhores de cada stack</h3>
                            <div id='rank-per-stack'>
                                <div className='person-top-design'>
                                    <img src={miniEllipse} alt='person face image' />
                                    <p className='full-name-rank-per-stack'>Nome Sobrenome</p>
                                    <p className='points-rank-per-stack'>[STACK]</p>
                                </div>
                                <div className='person-top-design'>
                                    <img src={miniEllipse} alt='person face image' />
                                    <p className='full-name-rank-per-stack'>Nome Sobrenome</p>
                                    <p className='points-rank-per-stack'>[STACK]</p>
                                </div>
                                <div className='person-top-design'>
                                    <img src={miniEllipse} alt='person face image' />
                                    <p className='full-name-rank-per-stack'>Nome Sobrenome</p>
                                    <p className='points-rank-per-stack'>[STACK]</p>
                                </div>
                                <div className='person-top-design'>
                                    <img src={miniEllipse} alt='person face image' />
                                    <p className='full-name-rank-per-stack'>Nome Sobrenome</p>
                                    <p className='points-rank-per-stack'>[STACK]</p>
                                </div>
                            </div>
                        </div>
                        <div id='rank-top-week-container'>
                            <h3>Top 5 Semana</h3>
                            <div id='rank-top-week'>
                                {sortUsers(users)?.map((user, index) => (
                                    <div key={user.id} className='person-top-week'>
                                        <p className='number-rank-week'>{index + 1}º</p>
                                        <img src={miniEllipse} alt='person face image' />
                                        <p className='full-name-rank-week'>{user.name}</p>
                                        <p className='points-rank-week'>{user.points}pts</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
