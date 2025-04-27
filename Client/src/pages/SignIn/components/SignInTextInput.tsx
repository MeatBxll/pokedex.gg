import "./SignInTextInput.css";

interface SignInTextInputProps {
  placeHolder: string;
}

export const SignInTextInput = (props: SignInTextInputProps) => {
  const { placeHolder } = props;
  return (
    <input
      className="signIn__TextInput"
      type="text"
      placeholder={placeHolder}
    ></input>
  );
};
