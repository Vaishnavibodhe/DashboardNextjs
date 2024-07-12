import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../Components/Sidebar"
import Navbar from '../Components/Navbar';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="p-4">
          {children}
        </main>
      </div>
    </body>
  </html>  );
}
