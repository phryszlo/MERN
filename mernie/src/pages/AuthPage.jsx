import SignUpForm from "../components/SignUpForm";
import LogBox from "../components/LogBox";
import { useState } from "react";

export default function AuthPage() {

  const [msg, setMsg] = useState('test');

  const logMsg = (message, append = false) => {
    setMsg(append ? `${msg} \n${message}` : message);
  }
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm logFn={logMsg} />
      <LogBox msg={msg} logFn={logMsg} />
    </main>
  );
}