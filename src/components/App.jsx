import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

 const [titleArray, setTitleArray] = React.useState([]);

 function addTitleArray (newNoteTitle){
  setTitleArray((prevTitle)=>{
    return [...prevTitle, newNoteTitle];
  })
  console.log(newNoteTitle);
 }

 function deleteItem(id){
    setTitleArray(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea  titleAdd = {addTitleArray} />
      {titleArray.map((notes,index) => {
        return(
        <Note 
         key= {index}
         id= {index}
         onCheck= {deleteItem}
         title= {notes.Title}
         content={notes.Content} />
        )}
      )}
      <Footer />
    </div>
  );
}

export default App;
