import './TopTenBoard.css';

import ListItemUser from '../ListItemUser/ListItemUser';

export default function TopTenBoard({
    getTopX,
    usersByStack,
    users,
    top10StackFilter,
    miniEllipse,
}) {
    return (
        <div id='top-ten-board'>
            {getTopX(usersByStack(users, top10StackFilter), 10)?.map((user, index) => (
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
