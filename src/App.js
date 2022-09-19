import "./App.css";
import ToogleView from "./components/ToggleView";
import UserView from "./components/UserView";

/*

1. Conditional Rendering
2. KlassenKomponenten (kurze Intro) – vs Function Components + Hooks
3. State (1.useState Hook)
4. Effects (2. useEffect Hook)

*/

const users = [
  {
    name: "Peter",
    email: "peter@gmail.com",
    alter: 35,
    status: "public",
  },
  {
    name: "Wolgang",
    email: "wolfy@gmail.com",
    alter: 17,
    status: "private",
  },
  {
    name: "Petra",
    email: "petra123@gmail.com",
    alter: 28,
    status: "private",
  },
  {
    name: "Louise",
    email: "l.mayer@gmail.com",
    alter: 36,
    status: "private",
  },
];

function App() {
  return (
    <div className="App">
      <ToogleView />
      <hr />
      {users.map((u) => (
        <UserView user={u} />
      ))}
    </div>
  );
}

export default App;
