export default function SocialLinks() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-5 text-neutral-400">
      {/* GitHub */}
      <a
        href="https://github.com/vishaljeyam"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 hover:text-white transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.82-.262.82-.582 0-.288-.012-1.243-.017-2.252-3.338.727-4.043-1.61-4.043-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.81 1.305 3.495.998.108-.774.418-1.305.76-1.607-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.296-1.23 3.296-1.23.656 1.652.244 2.872.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.806 5.624-5.479 5.922.43.37.813 1.096.813 2.21 0 1.596-.015 2.884-.015 3.277 0 .322.216.698.825.58C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
        <span className="absolute left-8 opacity-0 group-hover:opacity-100 text-xs text-neutral-500 transition-opacity">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vishaljeyam/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 hover:text-[#0A66C2] transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
          <path d="M20.447 20.452H16.89v-5.57c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.667H9.344V9h3.41v1.561h.047c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.27 2.372 4.27 5.456v6.287zM5.337 7.433a1.989 1.989 0 1 1 0-3.977 1.989 1.989 0 0 1 0 3.977zm1.781 13.019H3.56V9h3.558v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <span className="absolute left-8 opacity-0 group-hover:opacity-100 text-xs text-neutral-500 transition-opacity">LinkedIn</span>
      </a>
    </div>
  )
}
