import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import App from './App';

function logout() {
  localStorage.clear();
}

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login" onclick={logout} />
        </li>
      </ul>
    </div>
  );
}
