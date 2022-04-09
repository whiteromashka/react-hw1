import './user.css';

export const User = ({user}) => {
    return(
        <div className={user.id % 2 ? 'red' : 'green'}>
        <span>{user.name}</span>
        <span>{user.username}</span>
        <span>{user.email}</span>
            <hr/>
        </div>
    );
}
