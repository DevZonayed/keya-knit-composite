import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * Storefront chrome shared by all customer-facing routes (home, catalogue,
 * product, quote, cart, company, contact, account, states). Admin and checkout
 * live outside this group because they carry their own chrome.
 */
export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UtilityBar />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
