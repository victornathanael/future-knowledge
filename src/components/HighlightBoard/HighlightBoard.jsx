import './HighlightBoard.css';

import ListItemUser from '../ListItemUser/ListItemUser';

export default function HighlightBoard({ users, getTopX, ellipse }) {
    return (
        <div id='highlight-board'>
            {getTopX(users, 4)?.map((user) => (
                <ListItemUser key={user.id} name={user.name} stack={user.field} image={ellipse} />
            ))}
        </div>
    );
}
