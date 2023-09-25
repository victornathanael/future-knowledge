import './Ranking.css';
import React from 'react';
import api from '../../services/api';
import { useQuery } from 'react-query';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackgroundRanking from '../../components/BackgroundRanking/BackgroundRanking';
import ListItemUser from '../../components/ListItemUser/ListItemUser';

import ellipse from '../../assets/ellipse.svg';
import miniEllipse from '../../assets/mini-ellipse.svg';

function sortUsers(users) {
    return users?.sort((a, b) => b.points - a.points);
}

function usersByStack(users, stack) {
    return users?.filter((user) => user.field.toLowerCase() === stack.toLowerCase());
}

function getTopX(users, x) {
    return sortUsers(users)?.slice(0, x);
}

export default function Ranking() {
    const { data: users } = useQuery('users', async () => {
        const response = await api.get('/users');
        return response.data;
    });

    const stacks = {
        design: 'design',
        frontEnd: 'front-end',
        backEnd: 'Doidão',
        softwareDevelopment: 'software development',
    };

    const top10StackFilter = 'Design';

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
                            {getTopX(users, 4)?.map((user) => (
                                <ListItemUser
                                    key={user.id}
                                    name={user.name}
                                    stack={user.field}
                                    image={ellipse}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div id='line-ranking'>
                    <hr />
                </div>
                <div id='ranks'>
                    <div id='top-ten-container'>
                        <h3>Top 10 [{top10StackFilter}]</h3>
                        <div id='top-ten-board'>
                            {getTopX(usersByStack(users, top10StackFilter), 10)?.map(
                                (user, index) => (
                                    <ListItemUser
                                        key={user.id}
                                        rank={index + 1}
                                        name={user.name}
                                        points={user.points}
                                        image={miniEllipse}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div id='ranks-stack-and-week-container'>
                        <div id='rank-per-stack-container'>
                            <h3>Os melhores de cada stack</h3>
                            <div id='rank-per-stack'>
                                {Object.keys(stacks).map((stack) => {
                                    const user = (getTopX(usersByStack(users, stacks[stack]), 1) ||
                                        [])[0];
                                    if (!user) {
                                        return null;
                                    }
                                    return (
                                        <ListItemUser
                                            key={stack}
                                            name={user.name}
                                            stack={user.field}
                                            image={miniEllipse}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div id='rank-top-week-container'>
                            <h3>Top 5 Semana</h3>
                            <div id='rank-top-week'>
                                {getTopX(users, 5)?.map((user, index) => (
                                    <ListItemUser
                                        key={user.id}
                                        rank={index + 1}
                                        name={user.name}
                                        points={user.points}
                                        image={miniEllipse}
                                    />
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
