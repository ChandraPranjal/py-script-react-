import React from 'react'; // Import React
import './App.css';
import PyScript from "pyscript-react/esm"; // main entrypoint
import PyScriptProvider from "pyscript-react/esm/components/py-script-provider"; // specific component
function App() {
  return (
    <div className="App">
      <PyScriptProvider>
        <PyScript code="print('Hello world!')" /> {/* Use 'code' prop to specify Python script */}
      </PyScriptProvider>
    </div>
  );
}

export default App;
