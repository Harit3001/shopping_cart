export default function Search({ keyword, setKeyword }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search product..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}
