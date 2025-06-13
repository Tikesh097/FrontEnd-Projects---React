import { UserProvider } from './context/UserContext';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <UserProvider>
      <h1 className="text-xl font-bold p-4">User Management App</h1>
      <UserForm />
      <UserList />
    </UserProvider>
  );
};

export default App;
