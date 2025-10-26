// components/auth/AuthRedirectText.tsx
import Link from "next/link";

export default function AuthRedirectText({ text, linkText, href }) {
  return (
    <div className="flex justify-center items-center gap-1">
      <p>{text}</p>
      <Link href={href} className="text-primary underline">
        {linkText}
      </Link>
    </div>
  );
}
