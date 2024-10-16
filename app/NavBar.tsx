"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBug } from "react-icons/io5";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues/list",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBug className="h-7 w-7 hover:scale-125 transition-transform " />
      </Link>
      <ul className="flex space-x-6">
        {links.map((l) => (
          <Link
            key={l.href}
            className={classNames({
              "text-black hover:text-zinc-900 font-bold":
                l.href === currentPath,
              "text-zinc-600": l.href !== currentPath,
              " transition-colors hover:cursor-pointer  hover:underline": true,
            })}
            href={l.href}
          >
            {l.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
