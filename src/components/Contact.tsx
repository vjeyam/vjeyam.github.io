import "../styles/ContactPage.css";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // Simple mailto fallback (works on GitHub Pages)
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:jeyamvishal5@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  }

  return (
    <div className="page">
      <div className="container contact-wrap">
        <header className="contact-hero">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">Let&apos;s get in touch!</p>
        </header>

        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-label" htmlFor="name">
              <span className="sr-only">Your name</span>
              <input
                id="name"
                name="name"
                className="contact-input"
                placeholder="Your name..."
                required
              />
            </label>

            <label className="contact-label" htmlFor="email">
              <span className="sr-only">Your email</span>
              <input
                id="email"
                name="email"
                type="email"
                className="contact-input"
                placeholder="Your email..."
                required
              />
            </label>

            <label className="contact-label" htmlFor="message">
              <span className="sr-only">Your message</span>
              <textarea
                id="message"
                name="message"
                className="contact-textarea"
                placeholder="Your message..."
                rows={8}
                required
              />
            </label>

            <button className="contact-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}