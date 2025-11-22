
export default function FooterAuth({ text, linkText, linkHref }) {
  return (
    <footer className="mt-auto text-center text-neutral-white">
      <p>{text}</p>
      <a href={linkHref} className="text-primary-green hover:underline">
        <p>{linkText}</p>
      </a>
    </footer>
  );
}