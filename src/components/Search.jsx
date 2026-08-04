import { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="header-search">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
