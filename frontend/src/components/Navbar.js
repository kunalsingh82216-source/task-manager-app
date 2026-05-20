import React from 'react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">Task Manager</h1>
        <div className="navbar-menu">
          {user ? (
            <>
              <span className="navbar-user">{user.name}</span>
              <button className="navbar-logout" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
