import "./SignInTextInput.css";

interface SignInTextInputProps {
  placeHolder: string;
  onValueChanged: any;
  value: any;
}

export const SignInTextInput = (props: SignInTextInputProps) => {
  const { placeHolder, onValueChanged, value } = props;
  return (
    <input
      value={value}
      onChange={(e) => onValueChanged(e.target.value)}
      className="signIn__TextInput"
      type="text"
      placeholder={placeHolder}
    ></input>
  );
};
