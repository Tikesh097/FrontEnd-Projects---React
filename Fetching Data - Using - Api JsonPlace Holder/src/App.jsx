import { useEffect, useState } from 'react'

const DataFetchingApp = () => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') //API
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error: ", error));
  }, []);


  const toggleview = () => {
    setView((prev) => (prev === 'grid' ? 'flex' : 'grid'));
  };


  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>

      <h1>User Cards</h1>
      <button onClick={toggleview}>Switch To {view === 'grid' ? 'Flex' : 'Grid'} View</button>

      <div style={view === 'grid' ? styles.gridContainer : styles.flexContainer}>

        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

const styles = {
  toggleButton: {
    marginBottom: '20px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '250px',
    background: '#fff'
  }
};

export default DataFetchingApp
