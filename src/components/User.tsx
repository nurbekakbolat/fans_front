import React, { CSSProperties, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const User: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userContext?.isAuthenticated) {
      navigate('/login');
    }
  }, [userContext, navigate]);

  if (!userContext?.isAuthenticated) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div style={styles.container}>
        <h2 style={styles.title}>User</h2>
        <p style={styles.info}>Email: {userContext.user?.email}</p>
        <div style={styles.buttons}>
          <button
            style={styles.button}
            onClick={() => {
              userContext.logout();
              navigate('/login');
            }}
          >
            Logout
          </button>
          <button style={styles.button} onClick={() => navigate('/all-users')}>
            Show All Users
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center' as CSSProperties['textAlign'],
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
  },
  info: {
    marginBottom: '20px',
    fontSize: '16px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    flex: '1',
    margin: '0 5px',
  },
};

export default User;
