import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const DarkModeToggle = () => {
  const [isDark, updateIsDark] = useState(true);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => {
      updateIsDark((_) => isSystemDark);
    }
  );

  useEffect(() => updateIsDark((_) => systemPrefersDark), []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggle = () => {
    updateIsDark((isDark) => !isDark);
  };

  return (
    <div
      className="p-2 text-xl cursor-pointer"
      title={isDark ? "Let there be light!" : "Hello darkness, my old friend"}
      onClick={toggle}
    >
      {isDark ? "🔆" : "🌙"}
    </div>
  );
};

export default DarkModeToggle;
