export function Button({ children, onClick, className, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-cyan-700 hover:bg-cyan-800 text-white py-2 px-6 transition duration-500 ease-in-out ${
        disabled ? "disabled:bg-gray-500 disabled:pointer-events-none" : ""
      } rounded-full transition-colors ${className || ""}`}
    >
      {children}
    </button>
  )
}
