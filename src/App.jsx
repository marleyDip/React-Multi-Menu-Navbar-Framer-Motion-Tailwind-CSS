import "./App.css";
import logo from "./assets/logo.png";
import DesktopMenu from "./components/DesktopMenu.jsx";
import { menus } from "./utils.js";

function App() {
  return (
    <div>
      <header className="h-16 text-[15px] inset-0 fixed flex-center bg-[#18181A] ">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center relative">
            <img src={logo} alt="logo" className="h-12 cursor-pointer" />
          </div>

          {/* menus */}
          {/* Desktop menu */}
          <ul>
            {menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
