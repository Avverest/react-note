import React from 'react';
import './styles/NoteItem.scss';

export default ({note, onClick}) => {

  return (
    <div
      className="NoteItem"
      onClick={onClick}
      id={note.id}
    >
      <div className="NoteItem__title"> {note.title} </div>
      <div className="NoteItem__text"> {note.text} </div>
      <div className="NoteItem__date"> {note.date} </div>
    </div>
  )
}
