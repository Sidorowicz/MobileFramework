import axios from "axios";

export const adddata=(table,data)=>{
    axios.post(`http://localhost:403/${table}`, data
    ).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });
  }
