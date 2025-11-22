
export default function ButtonAuth({ children, ...props }) {
  return (
    <button 
      {...props} 
      className="
        bg-primary-green text-white font-bold w-[370px] py-2 px-4 mt-12 rounded-lg 
        hover:bg-green-700 transition-colors">
      {children}
    </button>
  );
}