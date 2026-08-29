export default function Main() {
  return (
    <main>
      <h2>Welcome to IntelliFindLaptopGuide</h2>
      <p>
        Please add only 1 specification at a time.
        <br />
        (e.g. 16GB RAM or 1TB SSD or Intel Ultra7)
      </p>
      <form className="add-specification-form">
        <input
          type="text"
          placeholder="e.g. 32GB RAM"
          aria-label="Add a laptop's specification"
        />
        <button>Add specification</button>
      </form>
    </main>
  );
}
