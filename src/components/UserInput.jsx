import { useState } from "react";

export default function UserInput() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          Initial Investment
          <input
            type="number"
            name="iInvestment"
            value={inputs.iInvestment || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Annual Investment
          <input
            type="number"
            name="aInvestment"
            value={inputs.aInvestment || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Exprected return
          <input
            type="number"
            name="eReturn"
            value={inputs.eReturn || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            name="duration"
            value={inputs.duration || ""}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}
