import Link from "next/link";
import { IoBug } from "react-icons/io5";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((l) => (
          <Link
            key={l.href}
            className="text-zinc-600 transition-colors hover:cursor-pointer hover:text-zinc-900 hover:underline"
            href="/"
          >
            {l.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
