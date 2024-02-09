import logo from "../assets/investment-calculator-logo.png";

export default function Header({ text }) {
  return (
    <div id="header">
      <img src={logo} alt="logo" />
      <h1>{text}</h1>
    </div>
  );
}
