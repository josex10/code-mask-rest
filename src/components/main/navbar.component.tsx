"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

import { ThemeSwitcherComponent } from "../shared/themeSwitcher.component";
import Image from "next/image";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-[8vh] bg-content1" >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="/maskChef.logo.png" alt="Mask Code Logo" width={60} height={60} />
          <p className="font-bold text-inherit text-2xl font-['LogoFont'] tracking-widest ml-4">Mask Code</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Ingresar</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register">
            Registro
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcherComponent />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
