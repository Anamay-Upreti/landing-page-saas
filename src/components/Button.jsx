import clsx from "clsx"

const Button = ({ icon, children}) => {
  return (
    <button className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group')}></button>
  )
}

export default Button