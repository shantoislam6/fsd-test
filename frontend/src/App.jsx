import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';

import ThemeToggle from './components/ThemeToggle';
import Users from './pages/Users';
import User from './pages/User';

function App() {
  return (
    <>
      <ThemeToggle />
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<Users />}
            />
            <Route
              path="/users"
              element={<Users />}
            />
            <Route
              path="/users/:id"
              element={<User />}
            />
            <Route
              path="*"
              element={<h1>Page not found</h1>}
            />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
