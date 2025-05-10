import "./SignInTextInput.css";

interface SignInTextInputProps {
  placeHolder: string;
  onValueChanged: any;
  value: any;
  err: any;
}

export const SignInTextInput = (props: SignInTextInputProps) => {
  const { placeHolder, onValueChanged, value, err } = props;
  return (
    <div className="signIn__wrap">
      <input
        value={value}
        onChange={(e) => onValueChanged(e.target.value)}
        className="signIn__TextInput"
        type="text"
        placeholder={placeHolder}
      />
      <div
        style={err !== "none" ? {} : { display: "none" }}
        className="signIn__err"
      >
        {err}
      </div>
    </div>
  );
};
