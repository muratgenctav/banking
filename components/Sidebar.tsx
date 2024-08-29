'use client'
{/* If the component is going to be used only 
  for browser functionalities like routing, hooks 
  and so on, make it client side component.
  See: 
  - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
  - https://nextjs.org/learn/react-foundations/server-and-client-components
  Another rule of thumb is:
  Stay on server side unless you get an error that requires you to switch to client side.
  */}

import Link from "next/link"
import Image from "next/image"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">NextBank</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "sidebar-link", {"bg-bank-gradient": isActive}
              )}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label whitespace-nowrap", {"!text-white": isActive})}>
                {item.label}
              </p>
            </Link>
          )
        })}

        USER
      </nav>

      FOOTER
    </section>
  )
}

export default Sidebar