import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import setToken from "../Config";

const mycontext = createContext({});
const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Define error state

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token" || "{}"));
    if (storedToken) {
      setToken(storedToken?.token);
    }
  }, []);

  const Signup = async (item) => {
    try {
      setLoading(true);
      setError(null); // Reset error on each action

      const response = await axios.post("/auth/signup", item);

      localStorage.setItem("token", JSON.stringify(response.data));
      setToken(response.data.token);

      return response.data;
    } catch (error) {
      setError("Email already exists");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const Login = async (Item) => {
    try {
      setLoading(true);
      setError(null); // Reset error on each action

      const response = await axios.post("/auth/login", Item);

      localStorage.setItem("token", JSON.stringify(response.data));
      setToken(response.data.token);

      return response.data;
    } catch (error) {
      setError("Incorrect email or password" );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <mycontext.Provider value={{ Signup, Login, loading, error, setError }}>
      {children}
    </mycontext.Provider>
  );
};

const useProvider = () => useContext(mycontext);
export { useProvider };
export default AuthContext;
