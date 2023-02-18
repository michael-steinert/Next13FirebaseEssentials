'use client';
import { AuthContextProvider } from '@/src/context/AuthContext';
import { ReactNode } from 'react';
import './globals.css';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
