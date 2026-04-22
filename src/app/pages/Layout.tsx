import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
