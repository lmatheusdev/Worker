
export default function Section({ children }) {
  return (
    <section className="grid grid-cols-3 gap-3 items-stretch">
      {children}
    </section>
  );
}

