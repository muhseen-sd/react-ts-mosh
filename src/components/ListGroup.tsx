function ListGroup() {
  let items = ["Makkah", "Madina", "Dubai", "Abuja"];
  items = [];
    if (items.length === 0){
        return(<>
        <h1>List</h1>
        <p>No list found</p>
        </>)
    }
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
