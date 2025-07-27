import { ChevronDown } from "lucide-react";

export default function DesktopMenu({ menu }) {
  // check menu has sub meu
  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <li>
      {/* Replace with react-router-link */}
      <span>{menu.name}</span>
      {hasSubMenu && <ChevronDown />}
    </li>
  );
}
