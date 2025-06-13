import { useState } from 'react';
import { useUserContext } from '../context/UserContext';

const UserForm = () => {
    const { addUser } = useUserContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;
        addUser({ id: Date.now(), name, email });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border p-2 mr-2"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border p-2 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add User</button>
        </form>
    );
};

export default UserForm;
