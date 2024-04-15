import Link from 'next/link';
import { ThemeSwitch } from 'nextra-theme-docs';
const Footer = () => {
  return (
    <footer>
      <div className="bg-orange-200 ">
        <div className="container flex flex-row justify-around items-center py-16">
          <Link href="/">Docs</Link>
          <Link href="/">Get started</Link>
          <Link href="/">Ecosystem</Link>
          <Link href="/">Community</Link>
          <Link href="/">Development</Link>
          <Link href="/">Blog</Link>
        </div>
      </div>
      <div className="bg-pink-200">
        <div className="container flex flex-row items-center justify-between py-4">
          <ThemeSwitch />
          <small>
            Trino is open source software licensed under the Apache License 2.0
            and supported by the Trino Software Foundation. See trademark and
            other legal notices.
          </small>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
