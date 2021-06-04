import './App.css';
import Example from './components/Example';
import Welcome from './components/Welcome';
import AddNoteForm from './components/AddNoteForm';

function App() {
  return (
    <div className="App">
      <Welcome /> 
      <AddNoteForm />

      {/* {!loggedIn ? <> : <LogInForm />}
      
      <AddNoteForm />
      <MyNotes /> */}
    </div>
  );
}

export default App;
