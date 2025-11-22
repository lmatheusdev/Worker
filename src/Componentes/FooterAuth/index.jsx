import { Link } from "react-router-dom";

export default function FooterAuth({ text, linkText, linkHref }) {
  return (
    <footer className="mt-auto text-center text-neutral-white">
      <p>{text}</p>
      <Link to={linkHref} className="text-primary-green hover:underline">
        <p>{linkText}</p>
      </Link>
    </footer>
  );
}