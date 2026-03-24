import { useState } from "react";

function App() {
  return <Calculator />;
}

export default App;

function Calculator() {
  const [bill, setBill] = useState("");
  const [mySatisfied, setMySatisfied] = useState(0);
  const [friendSatisfied, setFriendSatisfied] = useState(0);

  return (
    <div>
      <Bill bill={bill} setBill={setBill}>
        How much was the bill?
      </Bill>
      <SelectPercentage percentage={mySatisfied} setPercentage={setMySatisfied}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendSatisfied}
        setPercentage={setFriendSatisfied}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Text
            bill={bill}
            mySatisfied={mySatisfied}
            friendSatisfied={friendSatisfied}
          />
          <Reset
            setBill={setBill}
            setMySatisfied={setMySatisfied}
            setFriendSatisfied={setFriendSatisfied}
          />
        </>
      )}
    </div>
  );
}

function Text({ bill, mySatisfied, friendSatisfied }) {
  const tip = (+bill * (+mySatisfied + +friendSatisfied)) / 2 / 100;
  return (
    <h2>
      You pay ${+bill + +tip}(${bill} + ${tip} tip)
    </h2>
  );
}

function Bill({ bill, setBill, children }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
    </div>
  );
}

function SelectPercentage({ percentage, setPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Reset({ setBill, setMySatisfied, setFriendSatisfied }) {
  function reset() {
    setBill("");
    setMySatisfied(0);
    setFriendSatisfied(0);
  }
  return <button onClick={reset}>Reset</button>;
}
