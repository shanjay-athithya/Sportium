<<<<<<< HEAD

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

=======
import "./globals.css";
import Header from "../components/Home/Header";  // Using the Header from the Home folder
import Footer from "../components/Home/Footer";  // Using the Footer from the Home folder
>>>>>>> 6d23ca00c32f9f637b1a55b81bd6beb19903e3c2

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
