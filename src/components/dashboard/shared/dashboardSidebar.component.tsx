import Image from "next/image";
import {
  TruckIcon,
  ShoppingBagIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import SidebarItemComponent from "./sidebarItem.component";

export type TItemProps ={
  href: string;
  icon: JSX.Element;
  name: string;
}

export const DashboardSidebarComponent = () => {
  const menuLinks: TItemProps[] = [
    {
      icon: <TruckIcon className="w-8" />,
      name: "Proveedores",
      href: "providers",
    },
    {
      icon: <ArchiveBoxIcon className="w-8" />,
      name: "Inventario",
      href: "inventory",
    },
    {
      icon: <ShoppingBagIcon className="w-8" />,
      name: "Compras",
      href: "purchases",
    },
  ];
  return (
    <aside className="bg-content1 h-screen w-20">
      <div className="flex items-center justify-center h-16 py-10">
        <Image
          src="/maskChef.logo.png"
          alt="Mask Code Logo"
          width={60}
          height={60}
        />
      </div>
      <nav>
        <ul>
          {menuLinks.map((link) => (
            <SidebarItemComponent
              key={link.href}
              href={link.href}
              icon={link.icon}
              name={link.name}
              />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
