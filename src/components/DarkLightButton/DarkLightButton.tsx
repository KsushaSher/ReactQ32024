import Dark from '../../assets/dark.svg?react';
import { useThemeToggle } from '../Context/hooks';

function DarkLightButton() {
  const toggleTheme = useThemeToggle();

  function handleOnClick() {
    toggleTheme();
  }

  return (
    <Dark
      className="dark_light_button"
      width={25}
      height={25}
      onClick={handleOnClick}
    />
  );
}
export default DarkLightButton;
