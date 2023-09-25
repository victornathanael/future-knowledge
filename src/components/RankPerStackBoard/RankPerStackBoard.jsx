import './RankPerStackBoard.css';

import ListItemUser from '../ListItemUser/ListItemUser';

export default function RankPerStackBoard({ getTopX, usersByStack, stacks, users, miniEllipse }) {
    return (
        <div id='rank-per-stack-board'>
            {Object.keys(stacks).map((stack) => {
                const userExist = (getTopX(usersByStack(users, stacks[stack]), 1) || [])[0];
                if (!userExist) {
                    return null;
                }
                return (
                    <ListItemUser
                        key={stack}
                        name={userExist.name}
                        stack={userExist.field}
                        image={miniEllipse}
                    />
                );
            })}
        </div>
    );
}
