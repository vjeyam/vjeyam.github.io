export default function Resume() {
  return (
    <div className="py-20 text-center">
      <a
        href="/Resume.pdf"
        download
        className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition"
      >
        Download Resume
      </a>
    </div>
  )
}
