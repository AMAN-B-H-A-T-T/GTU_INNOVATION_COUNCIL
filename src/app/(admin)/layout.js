import Siderbar2 from "./components/Sidebar2";
import "./global.css";

import "@/static/globals.css";
import '@/static/fonts.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f1f5f9" }}>
        <div className="w-full h-screen">
        <Siderbar2></Siderbar2>
        {children}
        <div className="w-full bottom-0 h-12 bg-black sm:pl-64 text-white">
          this is footer
        </div>
        </div>
      </body>
    </html>
  );
}
