import "./App.css";
import logo from "./assets/logo.png";
import DesktopMenu from "./components/DesktopMenu.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import { Menus } from "./utils.js";

function App() {
  return (
    <div>
      <header className="h-16 text-[15px] inset-0 fixed flex-center bg-[#18181A] ">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          {/* logo */}
          <div className="flex-center relative">
            <img src={logo} alt="logo" className="h-12 cursor-pointer" />
          </div>
          {/* logo */}

          {/* menus */}
          {/* Desktop menu */}
          <ul className="lg:flex-center hidden gap-x-1">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          {/* Desktop menu */}

          {/* button */}
          <div className="flex-center gap-x-5">
            <button className="py-2 px-4 rounded-xl text-white bg-sky-600 hover:bg-sky-700 hover:transform hover:translate-x-1 hover:transition-all flex-center shadow-md">
              Sign In
            </button>
            {/* button */}

            {/* mobile meu */}
            <div className="lg:hidden">
              <MobileMenu Menus={Menus} />
            </div>
            {/* mobile meu */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
