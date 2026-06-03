import {
  LayoutSideContentLeft,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import User from "./User";

const DashboardSidebar = () => {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];
  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-black"
          type="button"
        >
          <item.icon className="size-5 text-white" />
          <p className="text-muted hover:text-white font-bold">{item.label}</p>
        </button>
      ))}
    </nav>
  );
  return (
    <div className="bg-gradient-to-b from-[#0b1220] via-gray-900 to-black">
      <aside className="hidden w-64 shrink-0 p-4 lg:block">
        <User /> {navContent}
      </aside>

      <Drawer>
        <Button variant="secondary" className="lg:hidden">
          <LayoutSideContentLeft className="" />
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog className="bg-gradient-to-b from-[#0b1220] via-gray-900 to-black">
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                {" "}
                <User /> {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default DashboardSidebar;
