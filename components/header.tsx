import Link from "next/link";

const Header = () => {
  const LINKS = JSON.parse(process.env.NEXT_PUBLIC_LINKS || "[]");
  return (
    <header className="sticky top-0 left-0 z-10 w-full h-20 leading-20 flex items-center justify-between px-8 bg-white shadow">
      <Link className="text-3xl" href="/">
        {process.env.NEXT_PUBLIC_TITLE}{" "}
        <span className="text-sm hidden md:inline-block ml-2">
          {process.env.NEXT_PUBLIC_SUB_TITLE}
        </span>
        <p className="md:hidden text-sm mt-1 text-gray-500">
          {process.env.NEXT_PUBLIC_SUB_TITLE}
        </p>
      </Link>

      <ul className="flex gap-4">
        {LINKS.map((link: { label: string; src: string }) => (
          <Link
            target="_black"
            className="text-gray-500"
            href={link.src}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
        <Link className="text-gray-500" href="/about">
          About
        </Link>
      </ul>
    </header>
  );
};

export default Header;
