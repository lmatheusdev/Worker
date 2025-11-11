
export default function Container({ children }) {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary-green">
      {children}
    </div>
  );
}