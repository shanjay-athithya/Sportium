
import "./globals.css";
import Header from "../components/Home/Header";  // Using the Header from the Home folder
import Footer from "../components/Home/Footer";  // Using the Footer from the Home folder



export const metadata = {
  title: "SSN Sportium",
  description: "The Official Sports Club Of SSN",
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
