import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Nunito } from "next/font/google"

//this defines that layout of all your pages
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

export const metadata = {
  title: "BusyBee",
  description: "Study Timer & Tracker",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Header/>
      
        <main style = {{ flex:1}}>
          {children}
        </main>

        <Footer/>
        </body>

    </html>
  );
}