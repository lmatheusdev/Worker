
export default function Fieldset({ title, type, marginBottom }) {
  return (
    <fieldset className={`flex flex-col ${marginBottom}`}>
      <label htmlFor="email" className="text-neutral-white mb-2">{title}</label>
      <input 
        type={type} 
        id={type} 
        name={type} 
        required 
        className="bg-neutral-white w-[370px] rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-green"
      />
    </fieldset>
  );
}