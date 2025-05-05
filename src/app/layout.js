import "./globals.css";
import { K2D } from 'next/font/google';

const inter = K2D({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
});

export const metadata = {
  title: "DemicsHealth Foundation",
  description: "Using AI to tackle infectious diseases in Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
