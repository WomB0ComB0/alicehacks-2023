'use client';

import { useEffect, useState } from 'react';

export const ChangeLanguage = (language: string) => {
  const html = document.querySelector('html');
  html?.setAttribute('lang', language);
};

export const useLocale = (lang: string) => {
  const [locale, setLocale] = useState(lang);
  useEffect(() => {
    setLocale(lang);
  }, [lang]);
  return locale;
};

export const handleRelocation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, location: string) => {
  e.preventDefault();
  window.location.href = location;
};

export async function getSearchResults(searchParams: string): Promise<SearchQueryResult[] | undefined> {
  if (searchParams === '') return undefined;
  try {
    const res = await fetch(
      `https://dictionaryapi.com/api/v3/references/medical/json/${searchParams}?key=${import.meta.env.VITE_APIKEY}`,
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: SearchQueryResult[] = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return undefined;
  }
}

export const debounce = (() => {
  let timer: NodeJS.Timeout;

  return (callback: () => void, ms: number) => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export const changeLanguage = (language: string) => {
  const html = document.querySelector('html');
  html?.setAttribute('lang', language);
};
