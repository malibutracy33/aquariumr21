import MailtoLink from "@/components/mailto";
import Link from "next/link";
import React from "react";
// TO DO : Enter Link for paypal (need api?)

export default function FooterSns() {
  return (
    <footer className="flex flex-col gap-10 m-8">
      <section className="sns flex flex-col gap-8">
        <h2 className="font-mono text-clampTitles">SNS</h2>
        <div className="flex justify-between gap-1">
          <div className="sns__social font-subsites flex flex-col justify-between gap-4">
            <Link
              className="flex gap-2 items-center"
              href="https://www.instagram.com/aquarium.r21/"
            >
              <p className="order-2">Aquarium e.V Insta</p>
              <img
                src="images/insta.svg"
                alt="instagram"
                className="h-8 w-8 object-contain order-1"
              />
            </Link>
            <Link
              className="flex gap-2 items-center"
              href="https://t.me/+PWDf4rFSAEhmZThk"
            >
              <p className="order-2">Aquarium e.V Telegram</p>
              <img
                src="images/tele.svg"
                alt="telegram"
                className="h-8 w-8 object-contain order-1"
              />
            </Link>
            {/* TODO enter link */}
            <Link className="flex gap-2 items-center" href="#">
              <p className="order-2">support us!</p>
              <img
                src="images/paypal.svg"
                alt="paypal"
                className="h-8 w-8 object-contain order-1"
              />
            </Link>
          </div>
          <div className="sns__img flex flex-col gap-2">
            <Link href="https://prepaidrecords.bandcamp.com/">
              <img
                src="images/paid.jpeg"
                alt=""
                className="h-sns w-sns border border-black p-1"
              />
            </Link>
            <Link href="https://goldendoomrecords.bandcamp.com/">
              <img
                src="images/gdr.jpeg"
                alt=""
                className="h-sns w-sns border border-black p-1"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className="pt-6 border-t border-black">
        <ul className="font-black text-2xl footer__categories flex justify-between gap-2">
          <li className="self-start">
            <a href="#">Impressum</a>
          </li>
          <li className="self-end">
            <MailtoLink word="Kontakt" />
          </li>
          <li className="self-start">
            <a href="/impressum">Datenschutz</a>
          </li>
          <li className="self-end">© R21 GbR 2024</li>
        </ul>
      </div>
    </footer>
  );
}
