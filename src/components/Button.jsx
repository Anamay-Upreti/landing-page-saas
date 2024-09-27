import clsx from "clsx"

const Button = ({ icon, children, href, containerClassName }) => {
    const Inner = () => (
        <>
        <span>
            <span>
                Marker
            </span>
        </span>
        </>
    )
  return href ? (
    <a className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName, onClick)}
    href={href}   
    >
     <Inner/>
    </a>
  ) : (
    <button className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName,
    )}
    onClick= {onClick}
    >
        <Inner/>
    </button>
  )
}

export default Button