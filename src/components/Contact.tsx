export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <p className="text-neutral-400 mt-2">
        Feel free to reach out for collaboration or opportunities.
      </p>

      {/* Email Button */}
      <a
        href="mailto:jeyamvishal5@gmail.com"
        className="inline-block mt-6 px-6 py-3 border border-accent rounded-lg text-accent hover:bg-accent hover:text-black transition"
      >
        Email Me
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/vjeyam/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 ml-3 px-6 py-3 border border-blue-400 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-black transition"
      >
        LinkedIn
      </a>
    </section>
  );
}