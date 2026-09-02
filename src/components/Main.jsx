import { useState } from "react";

export default function Main() {
  const [specifications, setSpecifications] = useState([]);

  const specificationsListItems = specifications.map((specification, index) => (
    <li key={index}>{specification}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newSpecification = formData.get("specification");
    setSpecifications((prevSpecifications) => [
      ...prevSpecifications,
      newSpecification,
    ]);
  }

  console.log(specificationsListItems);

  return (
    <main>
      <h2>Welcome to IntelliFindLaptopGuide</h2>
      <p>
        Please add only 1 specification at a time.
        <br />
        (e.g. 16GB RAM or 1TB SSD or Intel Ultra5)
      </p>
      <form onSubmit={handleSubmit} className="add-specification-form">
        <input
          type="text"
          name="specification"
          placeholder="e.g. 32GB RAM"
          aria-label="Add a laptop's specification"
        />
        <button>Add specification</button>
      </form>
      <ul>{specificationsListItems}</ul>
    </main>
  );
}
