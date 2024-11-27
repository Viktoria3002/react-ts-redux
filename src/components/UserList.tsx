import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UserList: FC = () => {
  const { error, users, loading } = useTypedSelector((state) => state.user);
  const { fetchAllUsers } = useActions();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  if (loading) {
    return <h1>Юзеры загружаются...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
