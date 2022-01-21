import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const apicontext = createContext();
export default function ApiContextProvider({ children }) {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const data = await axios.get('http://127.0.0.1:5500/project0/src/server/server.json')
    return data.data;
  
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const api = await getdata();
      console.log(api);
      setData(api);
    };

    fetchAPI();
  }, []);

  return <apicontext.Provider value={data}>{children}</apicontext.Provider>;
}
