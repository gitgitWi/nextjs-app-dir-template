import { PropsWithChildren } from 'react';

import { ReactQueryClientProvider } from '@features/providers/react-query';
import './global.scss';

export const metadata = {
  title: 'Next App',
  description: 'created from nextjs-template by gitgitWi',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <head></head>

      <body>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
