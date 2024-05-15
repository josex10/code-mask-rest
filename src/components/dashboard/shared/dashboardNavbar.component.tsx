import { ThemeSwitcherComponent } from "@/components/shared/themeSwitcher.component";
import { getCookiePayload } from "@/lib/helpers/cookies.helper";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import {
  ArrowLeftEndOnRectangleIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { logoutAction } from "@/lib/actions/login/loginActions";

export const DashboardNavbarComponent = async () => {
  const cookie = await getCookiePayload();
  return (
    <Navbar position="sticky" className="bg-content1" maxWidth="full">
      <NavbarBrand>
        <p className="font-bold text-inherit">
          {cookie && cookie.restaurantName}
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcherComponent />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            isIconOnly
            color="primary"
            aria-label="Like"
            size="sm"
            className="p-1"
          >
            <QuestionMarkCircleIcon />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            isIconOnly
            color="success"
            aria-label="Like"
            size="sm"
            className="p-1"
          >
            <UserIcon />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            isIconOnly
            color="warning"
            aria-label="Like"
            size="sm"
            className="p-1"
          >
            <Cog8ToothIcon />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <form action={logoutAction}>
            <Button
              isIconOnly
              color="danger"
              aria-label="Like"
              size="sm"
              className="p-1"
              type="submit"
            >
              <ArrowLeftEndOnRectangleIcon />
            </Button>
          </form>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
