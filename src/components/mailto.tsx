import Link from "next/link";

interface Props {
  word: string;
}

export default function MailtoLink({ word }: Props) {
  const email = "info@aquarium.is";
  const subject = "Hello from my website";
  const body = "I thought you might be interested in this...";

  return (
    <Link
      href={`mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`}
    >
      {word}
    </Link>
  );
}
