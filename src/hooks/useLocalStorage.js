import { useEffect, useState } from "react";

export const useLocalStorage = (keyName, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const savedValue = localStorage.getItem(keyName);

    if (savedValue !== null) {
      setValue(savedValue);
    }
  }, [setValue, keyName]);

  useEffect(() => {
    localStorage.setItem(keyName, value);
  }, [value, keyName]);

  return [value, setValue];
};
