import React from 'react';
import { BiSun } from 'react-icons/bi';

const DarkTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if ((currentTheme = 'dark')) {
      return (
        <BiSun
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BsFillMoonFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  return <div></div>;
};

export default DarkTheme;
