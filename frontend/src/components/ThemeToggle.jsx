import themeToggleStyles from './theme-toggle.module.css';

export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };
  return (
    <div className={themeToggleStyles.toggleSwitch}>
      <input
        type="checkbox"
        id="theme-toggle"
        onClick={toggleTheme}
      />
      <label htmlFor="theme-toggle"></label>
    </div>
  );
}
