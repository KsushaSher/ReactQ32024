import Dark from '../../assets/dark.svg?react';
import { useTheme, useThemeToggle } from '../Context/hooks';

function DarkLightButton() {
  const theme = useTheme();
  const themeToggle = useThemeToggle();

  function handleOnClick() {
    themeToggle();
  }

  return (
    <button className="button_theme">
      <Dark
        className={`dark_light_button ${theme}`}
        width={25}
        height={25}
        onClick={handleOnClick}
      />
    </button>
  );
}
export default DarkLightButton;
