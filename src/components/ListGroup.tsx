import { MouseEvent } from "react";


function ListGroup() {
  const items = ["Makkah", "Madina", "Dubai", "Abuja"];
  // items = [];

  const handleClick = (event: MouseEvent) => console.log(event) 

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>NO list found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
