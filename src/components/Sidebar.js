import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './styles/Sidebar.scss';
import NoteList from './NoteList';
import ToolsBar from './ToolsBar';
import NoteCreator from './NoteCreator';
import { createNote } from '../store/actions';

class Sidebar extends React.Component {


  submitHandler = event => {
    event.preventDefault();

    const newNote = {
      id: Date.now().toString(),
      title: 'Title',
      text: 'Your text',
      date: moment().format('YYYY-MM-DD hh:mm')
    }

    this.props.createNote(newNote);
  }

  render() {
    return(
      <div className="Sidebar">
        <ToolsBar />
        <div className="Sidebar__list">
          <h3>List of notes</h3>
          <form onSubmit={this.submitHandler}>
            <div className="Sidebar__items">
              <NoteList onClick={this.props.onClick} />
            </div>
            <NoteCreator />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workspace: state.workspace.workspace,
  notes: state.notes.notes,
  map: state.notes.noteMap
});

const mapDispatchToProps = {
  createNote
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
