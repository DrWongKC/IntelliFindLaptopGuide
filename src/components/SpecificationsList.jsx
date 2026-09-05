export default function SpecificationsList(props) {
  const specificationsListItems = props.specifications.map(
    (specification, index) => <li key={index}>{specification}</li>,
  );
  return (
    <section>
      <h2>Mandatory Pre-Set Requirements:</h2>
      <ul className="specifications-list" aria-live="polite">
        {specificationsListItems}
      </ul>
      {props.specifications.length > 1 ? (
        <div className="get-laptop-container">
          <div>
            <h3>Ready for your laptop recommendation?</h3>
            <p>
              Receive a laptop recommendation from your list of pre-determined
              specifications.
            </p>
          </div>
          <button onClick={props.getRecommendation}>
            Get laptop recommendation
          </button>
        </div>
      ) : null}
    </section>
  );
}
