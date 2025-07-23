'use client';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <p className="text-2xl font-bold">{t('greeting')}</p>
      <p className="mb-4">{t('description')}</p>
    </main>
  );
}
