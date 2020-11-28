import firebase from "firebase/app";
import "firebase/auth";
import { useCallback, useState } from "react";

export function useLogin(email: string, password: string) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      setSuccess(false);
      setError("");
      if (!email || !password) {
        setError("Please enter a valid email and password.");
      } else {
        const loginWithFirebase = async () => {
          setLoading(true);
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            setSuccess(true);
          } catch (e) {
            setError(e.message);
          }
          setLoading(false);
        };
        loginWithFirebase();
      }
    },
    [email, password]
  );

  return { loading, success, error, handleLogin };
}
