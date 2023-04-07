import { PropsWithChildren } from 'react';

import './global.scss';

export const metadata = {
  title: 'Next App',
  description: 'created from nextjs-template by gitgitWi',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
