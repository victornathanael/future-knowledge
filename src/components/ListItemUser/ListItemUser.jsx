import './ListItemUser.css';

export default function ListItemUser({ rank, image, name, points, stack }) {
    return (
        <div className='list-item-user'>
            {rank && <p className='list-item-user__rank'>{rank}º</p>}
            <img src={image} alt='person face image' />
            <p className='list-item-user__name'>{name}</p>
            {points && <p className='list-item-user__points'>{points}pts</p>}
            {stack && <p className='list-item-user__stack'>[{stack}]</p>}
        </div>
    );
}
