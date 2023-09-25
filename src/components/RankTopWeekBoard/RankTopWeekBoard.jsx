import './RankTopWeekBoard.css';

import ListItemUser from '../ListItemUser/ListItemUser';

export default function RankTopWeekBoard({ getTopX, miniEllipse, users }) {
    return (
        <div id='rank-top-week-board'>
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
    );
}
