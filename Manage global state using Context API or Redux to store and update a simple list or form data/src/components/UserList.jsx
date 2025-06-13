import { useUserContext } from '../context/UserContext';

const UserList = () => {
    const { users } = useUserContext();

    return (
        <ul className="p-4">
            {users.length === 0 && <li>No users added.</li>}
            {users.map(user => (
                <li key={user.id} className="border p-2 mb-2">
                    <strong>{user.name}</strong> - {user.email}
                </li>
            ))}
        </ul>
    );
};

export default UserList;
