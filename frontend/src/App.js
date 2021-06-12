import './App.css';
import Example from './components/Example';
import Welcome from './components/Welcome';
import AddNoteForm from './components/AddNoteForm';
import MyNotes from './components/MyNotes';

function App() {
  return (
    <div className="App">
      <Welcome /> 
      <AddNoteForm />
      <MyNotes />

      {/* {!loggedIn ? <> : <LogInForm />}
      
      <AddNoteForm />
      <MyNotes /> */}
    </div>
  );
}

export default App;
