// import Dark from './dark.svg?react';
import { useTheme, useThemeToggle } from '../Context/hooks';
import { getTestAttrs } from '../../../tests/getTestAttrs';

function DarkLightButton() {
  const theme = useTheme();
  const themeToggle = useThemeToggle();

  function handleOnClick() {
    themeToggle();
  }

  return (
    <button
      {...getTestAttrs({ id: 'theme-button' })}
      className="button_theme"
      onClick={handleOnClick}
    >
      Dark
      {/* <Dark className={`dark_light_button ${theme}`} width={25} height={25} /> */}
    </button>
  );
}
export default DarkLightButton;
