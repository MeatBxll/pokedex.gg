export const Button = () => {
  function runButton() {
    console.log("meater");
  }

  return <button onClick={runButton}></button>;
};
