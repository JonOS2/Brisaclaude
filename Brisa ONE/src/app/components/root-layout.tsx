import { Outlet } from 'react-router';
import { Navbar } from './navbar';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Outlet />
    </div>
  );
}
