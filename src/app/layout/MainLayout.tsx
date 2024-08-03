import { Outlet } from "react-router-dom";
import { ResponsiveNav } from "../components/Nav/Nav";

export function MainLayout() {
  return (
    <>
      <ResponsiveNav />
      <Outlet />
    </>
  );
}
