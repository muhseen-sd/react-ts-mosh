// function ListGroup() {
//   let items = ["Makkah", "Madina", "Dubai", "Abuja"];
//   items = [];

//   const message = items.length === 0 ? <p>No list found</p> : null
//   return (
//     <>
//       <h1>List</h1>
//       {message}
//       <ul className="list-group">
//         {items.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


function ListGroup(){
  return(
    <>
      <h1 className="header">Final Year Project</h1>
      <p>My proposed final year project is under <b>realestate</b> ecosystem where I am trying to make things easier for people
          Especially students   
      </p>
      <img src="./btc_class.png" alt="Screenshot of an ongoing class" />    

      <ol>
        <hr /><hr/><h2>I will consider the following things while doing the project</h2> <hr /><hr />
        <li>Establsih a survey to collect data from the main targets </li>
        <li>Visit 5 hostels</li>
        <li>5 off-cmapus rooms</li>
        <li>5 verified agants with their contact</li>
        <li>Obtain atleast 100 students answers</li>
      </ol>
    </>
  )
}

export default ListGroup;
