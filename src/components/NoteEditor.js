import React, {useState} from 'react';
import  './styles/NoteEditor.scss';
import { Input } from './Input';
import { FakeInput } from './FakeInput';
import { Button } from './Button';
import { connect } from 'react-redux';
import { editCurrentNote, editNote } from '../store/actions';

const NoteEditor = (props) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    let index = props.map[props.currentNote.id];
    const notes = props.notes;
    console.log('index', index);
    notes[index] = {
      ...notes[index],
      title,
      text
    }
    // props.editCurrentNote(notes)
    console.log('note', notes);
    // props.editNote(notes);
  }

  return(
    <form className="NoteEditor" onSubmit={submitHandler}>
      <div className="NoteEditor__title">
        <Input label="Title">
          <input
            type="text"
            placeholder="Title field"
            value={title}
            name="title"
            onChange={event => setTitle(event.target.value)}
          />
        </Input>
      </div>

      <div className="NoteEditor__content">
        <Input label="Content">
          <textarea
            placeholder="Text field"
            value={text}
            name="text"
            onChange={event => setText(event.target.value)}
          >
          </textarea>
        </Input>
      </div>
      <div className="NoteEditor__date">
        <FakeInput label="Date">
        </FakeInput>
      </div>
      <div className="NoteEditor__button">
        <Button label="Save" />
      </div>
    </form>
  )
}
const mapStateToProps = state => ({
  currentNote: state.notes.currentNote,
  map: state.notes.noteMap,
  notes: state.notes.notes
})

const mapDispatchToState = {
  editCurrentNote, editNote
}

export default connect(mapStateToProps, mapDispatchToState)(NoteEditor);
