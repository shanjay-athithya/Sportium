
import "./globals.css";


export const metadata = {
  title: "Sportium",
  description: "Official Sports Cub Of SSN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
