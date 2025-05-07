import Footer from "./Footer";
import Navbar from "./Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="pt-10">{/* Space for the fixed navbar */}</div>
      {/* Main content area */}
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
