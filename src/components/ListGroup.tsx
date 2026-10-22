import { useState } from "react";

function ListGroup() {
  const items = ["Makkah", "Madina", "Dubai", "Abuja"];
  // items = [];

const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>NO list found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
