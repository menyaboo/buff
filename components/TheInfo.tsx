'use client'
import {useState, useEffect} from "react";

const TheInfo = () => {
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

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
      <p>Тестовый макет</p>
      <button onClick={handleThemeSwitch}>сменить тему</button>
    </div>
  )
}

export {TheInfo}
