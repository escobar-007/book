import axios from "axios";
import { useEffect, useState } from "react";

export const useRegister = () => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    onSuccess: null,
  });
  const onRegister = async (payload) => {
    setState({ data: null, loading: true, onSuccess: null });
    const { data, status } = await axios.post(
      "http://localhost:3000/api/auth/register",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (status === 200 || status === 201) {
      return setState({ data, loading: false, onSuccess: true });
    }
    setState({ data, loading: false, onSuccess: false });
  };
  return {
    sendRequest: onRegister,
    loading: state.loading,
    onSuccess: state.onSuccess,
  };
};
