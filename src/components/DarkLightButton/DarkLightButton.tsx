import Dark from './dark.svg';
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
      <Dark className={`dark_light_button ${theme}`} />
    </button>
  );
}
export default DarkLightButton;
