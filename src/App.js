import React from 'react';
import './App.scss';
import './components/styles/Global.scss';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import { showWorkspace, hideWorkspace, openNote } from './store/actions';
import { connect} from 'react-redux';

class App extends React.Component {
  state = {
    currentNoteID: ''
  }

  handleClick = event => {
    let id = event.target.getAttribute('id');
    this.setState({
      currentNote: id
    });
    this.props.openNote(id);
  }

  render() {
    return (
      <div className="App">
        <Sidebar onClick={this.handleClick} />
        <Workspace id={this.state.currentNoteID} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes.notes,
  map: state.notes.noteMap
});

const mapDispatchToState = {
  showWorkspace, hideWorkspace, openNote
};

export default connect(mapStateToProps, mapDispatchToState)(App);
