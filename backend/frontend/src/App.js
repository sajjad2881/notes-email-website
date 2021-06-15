import './App.css';
import Welcome from './components/Welcome';
import AddNoteForm from './components/AddNoteForm';
import MyNotes from './components/MyNotes';
import SendEmail from './components/SendEmail';

function App() {
  return (
    <div className="App">
      <Welcome /> 
      <AddNoteForm />
      <MyNotes />
      <SendEmail />

      {/* {!loggedIn ? <> : <LogInForm />}
      
      <AddNoteForm />
      <MyNotes /> */}
    </div>
  );
}

export default App;
