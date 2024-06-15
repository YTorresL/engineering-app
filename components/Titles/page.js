export default function Titles({ title }) {
  return (
    <div className="w-full flex items-center">
      <h2 className="text-sm font-semibold py-2 pl-2 uppercase tracking-wide text-cyan-800">
        {title}
      </h2>
      <div className="border-cyan-800 border-t flex-1 mx-3"></div>
    </div>
  )
}
