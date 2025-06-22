'use client';

import { usePathname, useRouter } from 'next/navigation';

const supportedLocales = ['en', 'kr'] as const;
type Locale = typeof supportedLocales[number];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname) return null;

  const currentLocale = pathname.split('/')[1] as Locale;

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');

    if (supportedLocales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = segments.join('/');
    router.push(newPath);
  };

  const renderButton = (locale: Locale, label: string) => {
    const isActive = currentLocale === locale;

    return (
      <button
        onClick={() => switchLocale(locale)}
        disabled={isActive}
        className={`
          relative flex items-center space-x-1 transition duration-200 ease-in-out group
          ${isActive ? 'text-yellow-300 cursor-default' : 'text-white hover:text-yellow-300'}
        `}
      >
        <span className={`underline-slide ${isActive ? 'active' : ''}`}>{label}</span>
      </button>
    );
  };

  return (
    <div className="flex space-x-4 bg-blue-800 p-2 rounded">
      {renderButton('en', 'EN')}
      {renderButton('kr', 'KR')}
    </div>
  );
}
