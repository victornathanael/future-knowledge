import './Ranking.css';
import React from 'react';
import api from '../../services/api';
import { useQuery } from 'react-query';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackgroundRanking from '../../components/BackgroundRanking/BackgroundRanking';

import ellipse from '../../assets/ellipse.svg';
import miniEllipse from '../../assets/mini-ellipse.svg';
import HighlightBoard from '../../components/HighlightBoard/HighlightBoard';
import TopTenBoard from '../../components/TopTenBoard/TopTenBoard';
import RankPerStackBoard from '../../components/RankPerStackBoard/RankPerStackBoard';
import RankTopWeekBoard from '../../components/RankTopWeekBoard/RankTopWeekBoard';

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
        frontEnd: 'Frontend',
        backEnd: 'Backend',
        Marketing: 'Marketing',
    };

    const top10StackFilter = 'Design';

    return (
        <div>
            <Header />
            <main>
                <BackgroundRanking />
                <div id='highlights-of-week-container'>
                    <h1>RANKING</h1>
                    <h3>Sua pontuação atual:</h3>
                    <p>500pts</p>
                    <div id='highlights-of-week'>
                        <h3>Destaques da semana:</h3>
                        <HighlightBoard users={users} getTopX={getTopX} ellipse={ellipse} />
                    </div>
                </div>
                <div id='line-ranking'>
                    <hr />
                </div>
                <div id='ranks-container'>
                    <div id='ranks'>
                        <div id='top-ten-container'>
                            <h3>Top 10 [{top10StackFilter}]</h3>
                            <TopTenBoard
                                getTopX={getTopX}
                                usersByStack={usersByStack}
                                miniEllipse={miniEllipse}
                                top10StackFilter={top10StackFilter}
                                users={users}
                            />
                        </div>
                        <div id='ranks-stack-and-week-container'>
                            <div id='rank-per-stack-container'>
                                <h3>Os melhores de cada stack</h3>
                                <RankPerStackBoard
                                    stacks={stacks}
                                    users={users}
                                    getTopX={getTopX}
                                    miniEllipse={miniEllipse}
                                    usersByStack={usersByStack}
                                />
                            </div>
                            <div id='rank-top-week-container'>
                                <h3>Top 5 Semana</h3>
                                <RankTopWeekBoard
                                    getTopX={getTopX}
                                    miniEllipse={miniEllipse}
                                    users={users}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
