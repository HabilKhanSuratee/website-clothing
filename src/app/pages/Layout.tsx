import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
