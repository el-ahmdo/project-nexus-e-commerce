import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; // where pages render

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
