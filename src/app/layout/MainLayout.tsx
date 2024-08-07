import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

/** Layout principal de la aplicacion */
export function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
