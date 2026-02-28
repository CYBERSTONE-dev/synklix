import { Outlet } from '@tanstack/react-router';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import ExitIntentPopup from './ExitIntentPopup';
import StickyPrepaidBanner from './StickyPrepaidBanner';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <StickyPrepaidBanner />
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <ExitIntentPopup />
    </div>
  );
}
