import Link from "next/link";
import React from "react";
import MailtoLink from "../../components/mailto";

export default function Footer() {
  return (
    <footer className="m-2 py-4 border-t border-black">
      <ul className="font-black md:text-2xl flex-wrap flex justify-between gap-2">
        <li className="self-start">
          <Link href="/impressum">Impressum</Link>
        </li>
        <li className="self-end">
          <MailtoLink word="Kontakt" />
        </li>
        <li className="self-start">
          <Link href="/datenschutz">Datenschutz</Link>
        </li>
        <li className="self-end">© R21 GbR 2024</li>
      </ul>
    </footer>
  );
}
