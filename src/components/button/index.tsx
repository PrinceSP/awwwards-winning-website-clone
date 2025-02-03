const Button = ({id,title,leftIcon,rightIcon,containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className="relative overflow-hidden uppercase incline-flex font-general text-xs">
        <p>{title}</p>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button