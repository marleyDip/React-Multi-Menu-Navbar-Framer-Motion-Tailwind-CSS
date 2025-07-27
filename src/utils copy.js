/* import single name => import { PanelTop } from "lucide-react"; otherwise error */

import {
  BellDot,
  Bolt,
  BookOpenText,
  BriefcaseBusiness,
  CircleHelp,
  Database,
  Dessert,
  Images,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  PanelTop,
  Play,
  ShieldPlus,
  ShoppingBag,
  TriangleAlert,
  Users,
} from "lucide-react";

export const menus = [
  {
    name: "Features",
    SubMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Design",
        desc: "Responsive Design",
        icon: PanelsTopLeft,
      },
      {
        name: "Management",
        desc: "Site control",
        icon: Bolt,
      },
      {
        name: "Navigation",
        desc: "Link pages",
        icon: PanelTop,
      },
      {
        name: "CMS",
        desc: "Management content",
        icon: Database,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    sunMenuHeading: ["Get Started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Marketplace",
        desc: "Browse templates",
        icon: ShoppingBag,
      },
      {
        name: "Meetups",
        desc: "Upcoming events",
        icon: MapPin,
      },
      {
        name: "Updates",
        desc: "Changelog",
        icon: BellDot,
      },
      {
        name: "Academy",
        desc: "Watch lessons",
        icon: Play,
      },
      {
        name: "Blog",
        desc: "Posts",
        icon: BookOpenText,
      },
      {
        name: "Experts",
        desc: "Jobs",
        icon: BriefcaseBusiness,
      },
      {
        name: "Gallery",
        desc: "Images",
        icon: Images,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];
