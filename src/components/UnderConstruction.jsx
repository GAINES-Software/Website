import logo from "../assets/logo.svg";

function UnderConstruction() {
  return (
    <div className="Container">
      <div className="Logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Logo-font">🚧 UNDER CONSTRUCTION 🚧</p>
      </div>
    </div>
  );
}

export default UnderConstruction;
