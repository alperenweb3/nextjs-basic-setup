import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
    console.log(error);
  }

  console.log('Loaded locale:', locale, 'Messages:', messages);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
