import Markdown from "react-markdown";

export default function GeneratedRecommendation(props) {
  return (
    <section aria-live="polite" className="suggested-recommendation-container">
      <h2>Your laptop recommendation:</h2>
      <Markdown>{props.recommendation}</Markdown>
    </section>
  );
}
