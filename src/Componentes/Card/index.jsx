const Card = ({ children, color }) => {

  const bg = color === 1 ? "bg-primary-yellow" :
       color === 2 ? "bg-primary-blue" : "bg-primary-purple";
                     
  return (
    <div className={`m-6 rounded-3xl ${bg}`}> 
      {children}
    </div>
  )
}

export const CardHeader = ({ children }) => {
  return (
    <div className="text-center text-2xl font-bold text-neutral-white"> 
      {children}
    </div>
  )
} 

export const CardBody = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-3 p-6 justify-items-center"> 
      {children}
    </div>
  )
} 

Card.Header = CardHeader
Card.Body = CardBody

export default Card