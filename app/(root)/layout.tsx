import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: "Murat", lastName: "Genc"}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        {/* Central content with mobile nav*/}
        <div className="flex size-full flex-col">
          {/* Mobile nav is hidden on desktop by using md:hidden in root-layout */}
          <div className="root-layout">
            <Image 
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="logo"
            />
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
