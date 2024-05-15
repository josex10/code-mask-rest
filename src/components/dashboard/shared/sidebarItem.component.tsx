"use client";

import Link from "next/link";
import { TItemProps } from "./dashboardSidebar.component";
import { usePathname, useRouter } from "next/navigation";

const SidebarItemComponent = ({ href, icon, name }: TItemProps) => {
  const pathname = usePathname();
  const mainPath = 'dashboard';
  const path = (pathname.split('/').length > 2) ? href : `${mainPath}/${href}`;
  return (
    <li className={`hover:bg-primary my-1 text-xs text-center py-4 rounded-md ${pathname.includes(href) ? "bg-primary": ""}`}>
      <Link
        color="foreground"
        href={path}
        className="flex flex-col items-center"
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};

export default SidebarItemComponent;
