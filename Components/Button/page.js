export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-6 rounded-full transition-colors ${className}`}
    >
      {children}
    </button>
  )
}
