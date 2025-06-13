import { useEffect, useMemo, useState } from 'react'

const DataFetchApp = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [filterCompany, setFilterCompany] = useState('');

  //Fetch user
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);


  //Debounce the search input
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearchTerm(searchTerm);
    }, 500); //500ms debounce
    return () => clearTimeout(timeout);
  }, [searchTerm]);


  //Derived data based on search, filter, and sort
  const filteredUsers = useMemo(() => {
    let result = [...users];

    //Filter by search Term
    if (debounceSearchTerm) {
      result = result.filter(user =>
        user.name.toLowerCase().includes(debounceSearchTerm.toLowerCase())
      );
    }

    //Filter by company name if selected
    if (filterCompany) {
      result = result.filter(user =>
        user.company.name.toLowerCase().includes(filterCompany.toLowerCase())
      );
    }

    //sort
    result.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

    return result;

  }, [users, debounceSearchTerm, sortKey, filterCompany]);

  return (
    <>
      <h2>User List</h2>

      {/* Search Bar */}
      <input type="text" placeholder='Search by Name..'
        value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

      {/* Filter by Company */}
      <input type="text" placeholder='Filter by Company..'
        value={filterCompany} onChange={e => setFilterCompany(e.target.value)} />

      {/* Sort Dropdown */}
      <select value={sortKey} onChange={e => setSortKey(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>

      {/* Display Result */}
      {filteredUsers.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email} - {user.company.name}
        </li>
      ))}


    </>
  )
};

export default DataFetchApp;
