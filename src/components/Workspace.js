import React from 'react';
import './styles/Workspace.scss';
import NoteEditor from './NoteEditor';
import { connect, useDispatch } from 'react-redux';
import { showWorkspace, hideWorkspace } from '../store/actions';

function Workspace(props) {
  const dispatch = useDispatch();

  // const {id} = props;
  // const noteObj = (id) => {
  //   dispatch(showWorkspace());
  //   return props.notes[props.map[id]];
  // };

  if (!props.workspace) {
    return (
      <div className="Message">
        <p>Nothing edit!</p>
      </div>
    )
  }
  return(
    <div className="Workspace">
      <NoteEditor note={props.currentNote}/>
    </div>
  );
}

const mapStateToProps = state => ({
  workspace: state.workspace.workspace,
  notes: state.notes.notes,
  map: state.notes.noteMap,
  currentNote: state.notes.currentNote
});

const mapDispatchToState = {
  showWorkspace, hideWorkspace
};

export default connect(mapStateToProps, mapDispatchToState)(Workspace);
