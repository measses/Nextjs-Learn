import "./globals.css";
import ThemeToggle from "./ui/theme-toggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <div className="relative">
            <div className="absolute top-4 right-4">
              <ThemeToggle />
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
