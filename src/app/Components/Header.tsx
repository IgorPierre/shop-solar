import Link from "next/link";

export default function Header() {
    return (
      <header className="max-w-7xl mx-auto p-4">
        <Link href='/'>
          <img className="w-32" src="images/logo.png" alt="" />
        </Link>

      </header>
    );
  }