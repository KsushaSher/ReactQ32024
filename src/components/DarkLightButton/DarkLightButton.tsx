import Dark from '../../assets/dark.svg?react';
import { useTheme, useThemeToggle } from '../Context/hooks';

function DarkLightButton() {
  const theme = useTheme();
  const themeToggle = useThemeToggle();

  // const themeStyles = {
  //   fill: theme ? '#333' : '#f00',
  //   paddingRight: 40,
  // };

  function handleOnClick() {
    themeToggle();
  }

  return (
    <Dark
      className={`dark_light_button ${theme}`}
      // style={themeStyles}
      width={25}
      height={25}
      onClick={handleOnClick}
    />
  );
}
export default DarkLightButton;
