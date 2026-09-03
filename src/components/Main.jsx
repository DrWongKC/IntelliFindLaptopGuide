import { useState } from "react";

export default function Main() {
  const [specifications, setSpecifications] = useState([]);

  const [recommendationShown, setRecommendationShown] = useState(false);

  const specificationsListItems = specifications.map((specification, index) => (
    <li key={index}>{specification}</li>
  ));

  function addSpecification(formData) {
    const newSpecification = formData.get("specification");
    setSpecifications((prevSpecifications) => [
      ...prevSpecifications,
      newSpecification,
    ]);
  }

  return (
    <main>
      <h2>Welcome to IntelliFindLaptopGuide</h2>
      <p>
        Please add only 1 specification at a time.
        <br />
        (e.g. 16GB RAM or 1TB SSD or Intel Ultra5)
      </p>
      <form action={addSpecification} className="add-specification-form">
        <input
          type="text"
          name="specification"
          placeholder="e.g. 32GB RAM"
          aria-label="Add a laptop's specification"
        />
        <button>Add specification</button>
      </form>
      {specifications.length > 0 ? (
        <section>
          <h2>Mandatory Pre-Set Requirements:</h2>
          <ul className="specifications-list" aria-live="polite">
            {specificationsListItems}
          </ul>
          {specifications.length > 3 ? (
            <div className="get-laptop-container">
              <div>
                <h3>Ready for your laptop recommendation?</h3>
                <p>
                  Receive a laptop recommendation from your list of
                  pre-determined specifications.
                </p>
              </div>
              <button>Get laptop recommendation</button>
            </div>
          ) : null}
        </section>
      ) : null}
      <section>
        <h2>Claude Recommends:</h2>
        <article className="suggested-laptop-container" aria-live="polite">
          <p>
            Based on the specifications you have available, I would recommend{" "}
            <strong>Apple MacBook Pro</strong>.
          </p>
          <h3>Here are the reasons why:</h3>
          <ul>
            <li>It has a powerful M1 chip that can handle demanding tasks.</li>
            <li>
              It has a long battery life, which is great for on-the-go use.
            </li>
            <li>It has a high-resolution Retina display for clear visuals.</li>
            <li>It has a sleek and lightweight design for portability.</li>
            <li>It has a robust ecosystem of software and accessories.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
