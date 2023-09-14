'use client'
import {useState, useEffect} from "react";

const TheInfo = () => {
  function getSystemTheme(): boolean {
    if (typeof window !== 'undefined')
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    return false
  }
  const [theme, setTheme] = useState(getSystemTheme());

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-color-scheme", "dark");
    } else {
      document.documentElement.setAttribute("data-color-scheme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(!theme);
  };

  return (
    <div className={'prew-info'}>
      <p>Тестовый макет <span style={{fontStyle: "italic"}}>(только ПК версия)</span></p>
      <button onClick={handleThemeSwitch}>сменить тему</button>
    </div>
  )
}

export {TheInfo}
