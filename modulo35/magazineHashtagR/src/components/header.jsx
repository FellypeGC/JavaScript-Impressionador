import logo from "../assets/logo/hashtag.svg";
import UserButtons from "./UserButtons";

const Header = () => {
  return (
    <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between z-10">
      <a href="/">
        <img className="h-16 p-2" src={logo} alt="Logo da Hashtag" />
      </a>
      <UserButtons />
    </header>
  )
};

export default Header;