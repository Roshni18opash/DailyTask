import Link from "next/link";
export default function Navigation() {
  return (
    <header className="grid grid-cols-2 font-worksans">
      <div className="">Opash Software </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/clientcomp">ClientComponent</Link>
          </li>
          <li>
            <Link href="/servercomp">Servercomponent</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
