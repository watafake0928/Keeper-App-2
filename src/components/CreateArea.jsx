import React from "react";

function CreateArea(props) {
  // const [noteTitle, setNoteTitle] = React.useState("")
  // const [noteContent, setNoteContent] = React.useState("")

  // function titleChange (event){
  //   return setNoteTitle(event.target.value);
  // }

  // function contentChange (event){
  //   return setNoteContent(event.target.value);
  // }

  const [noteTitle, setNoteTitle] = React.useState({
    Title: "",
    Content: ""
  });

  function handleChange (event){
    const {name, value} = event.target;

    setNoteTitle((prevValue) =>{
     if (name === "title"){
        return{
        Title: value,
        Content: prevValue.Content,
        }
      } else if (name === "content"){
        return {
          Title: prevValue.Title,
          Content: value,
        }
      }
    });
  };


  return (
    <div className="form">
        <input onChange={handleChange} name="title" placeholder="Title" value={noteTitle.Title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value = {noteTitle.Content} />
        <button onClick={()=>{
          props.titleAdd(noteTitle);
          setNoteTitle({
            Title: "",
            Content: ""
          })
        }}>Add</button>
    </div>
  );
}

export default CreateArea;
