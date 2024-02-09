import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <Header text="Investment Calculator" />
      <UserInput />
      <Result />
      <Form />
    </>
  );
}

export default App;
