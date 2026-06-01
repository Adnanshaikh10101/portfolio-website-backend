import "../index.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Adnan Shaikh</h1>
        <h2>Frontend Developer</h2>
        <p>
          I build modern, responsive web applications using React, JavaScript,
          and clean UI design.
        </p>

        <div className="buttons">
          <button className="btn primary">Hire Me</button>
          <button className="btn secondary">View Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Home;