import { Outlet } from "react-router-dom";
import { ResponsiveNav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <ResponsiveNav />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
