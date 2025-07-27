import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MobileMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setIsClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // toggle sub menu item
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed left-0 top-16 right-0 overflow-y-auto h-full p-6 backdrop-blur bg-[#18181A] text-white "
      >
        <ul>
          {Menus?.map(({ name, subMenu }, i) => {
            // checking if sub menu exist
            const hasSubMenu = subMenu?.length > 0;
            // checking if menu is clicked
            const isClicked = clicked === i;

            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  // toggle sub menu item open
                  onClick={() => setIsClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu?.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md cursor-pointer gap-x-2"
                      >
                        {Icon && <Icon size={17} />}
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
