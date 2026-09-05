import { useState } from "react";
import SpecificationsList from "./SpecificationsList";
import GeneratedRecommendation from "./GeneratedRecommendation";
import { getLaptopRecommendationFromMistral } from "../ai";

export default function Main() {
  const [specifications, setSpecifications] = useState([]);

  const [recommendation, setRecommendation] = useState("");

  async function getRecommendation() {
    console.log(specifications);
    const generatedAIRecommendationMarkdown =
      await getLaptopRecommendationFromMistral(specifications);
    setRecommendation(generatedAIRecommendationMarkdown);
  }

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
        Please add only 1 specification at a time with at least 2 or more
        specifications to receive a laptop recommendation.
        <br />
        (e.g. 16GB RAM and/or 1TB SSD and/or Intel Ultra5)
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
        <SpecificationsList
          specifications={specifications}
          getRecommendation={getRecommendation}
        />
      ) : null}
      {recommendation ? (
        <GeneratedRecommendation recommendation={recommendation} />
      ) : null}
    </main>
  );
}
