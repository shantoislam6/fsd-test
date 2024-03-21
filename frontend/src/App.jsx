import './app.css';

import ProfileCards from './components/ProfileCards';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
      <ThemeToggle />
      <main>
        <ProfileCards />
      </main>
    </>
  );
}

export default App;
