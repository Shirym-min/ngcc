import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "./Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "NGCC Homepage",
  description: "NGCCについて知る",
  verification: {
    google: "eT9sHveeFbfvjXba3qAb6aMOkifUU75c7NAcO-pZ9pM"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    
    <html lang="ja">
      <body>
        
        <Header />
        {children}
      </body>
    </html>
  );
}
