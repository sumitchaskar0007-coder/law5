import React from "react";
import "./FounderSection.css";

const FounderSection = () => {
  return (
    <section className="founder-section">

      {/* Left – Image */}
      <div className="founder-video">
        <a
          href="https://www.youtube.com/watch?v=YtLU0yOucrc"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/shardul1.png"
            alt="Founder Message"
          />
          <span className="play-btn">▶</span>
        </a>
      </div>

      {/* Right – Content */}
      <div className="founder-content">
        <h2>Message From Our Founder</h2>

        <h4>Adv. Shardulrao Sudhakarrao Jadhavar</h4>

        <p>
          Welcome to Adv. Shardulrao Sudhakarrao Jadhavar College of Law — a place
          where education meets values. Our mission is to empower students with
          legal knowledge, discipline, and confidence to become responsible
          professionals and future leaders.
        </p>

        <p>
          We believe in holistic development, practice-oriented learning, and
          strong ethical foundations. Together, let us build a brighter future
          through justice, integrity, and excellence.
        </p>

        <button>Explore Our College</button>
      </div>

    </section>
  );
};

export default FounderSection;
