import React from 'react';
import './styles/NoteList.scss';
import NoteItem from './NoteItem';
import { connect } from 'react-redux';

const NoteList = ({notes, onClick}) => {
  if (!notes.length) {
    return <p>No notes!</p>
  }
  return notes.map(note => <NoteItem note={note} key={note.id} onClick={onClick} id={Date.now().toString()}/>)
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}
export default connect(mapStateToProps, null)(NoteList);
