import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>
      <p>
        Subscribe to our newsletter for the latest fashion trends and sales
      </p>

      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter Your Email"
        />
        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;
