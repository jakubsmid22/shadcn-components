import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const NavigationMenuComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/navigation-menu"
        className="font-bold underline cursor-pointer"
      >
        Navigation Menu
      </a>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-32 gap-2">
                <NavigationMenuLink>New Arrivals</NavigationMenuLink>
                <NavigationMenuLink>Bestsellers</NavigationMenuLink>
                <NavigationMenuLink>On Sale</NavigationMenuLink>
                <NavigationMenuLink>Categories</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-32 gap-2">
                <NavigationMenuLink>Consulting</NavigationMenuLink>
                <NavigationMenuLink>Customer Support</NavigationMenuLink>
                <NavigationMenuLink>Custom Solutions</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-32 gap-2">
                <NavigationMenuLink>Our Story</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuComponent;
