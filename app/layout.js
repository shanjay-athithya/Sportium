
import "./globals.css";
<<<<<<< HEAD
import Header from "../components/Header";
import Footer from "../components/Footer";
=======
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
>>>>>>> 67b14e2 (Initial commit)


export const metadata = {
  title: "Sportium",
  description: "Official Sports Cub Of SSN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
