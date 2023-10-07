import axios from "axios";
import React, { useEffect, useState } from "react";

function Informasi() {
  const [data, setData] = useState([])
  const AllData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
      console.log(data);
      setData(data)
    })
  }

  useEffect(() => {
    AllData()
  }, [])

  const HandleSendData = (e) => {
    e.preventDefault();
    console.log(e.target['full_name'].value);
    axios.post('https://jsonplaceholder.typicode.com/users/post', {
      name: e.target['full_name'].value,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <>
      {data.map((item) => (
        <div>{item.name}</div>
      ))}

      <div className="mt-10">
        <form onSubmit={HandleSendData} action="">
          <div className="flex gap-5">
            <input type="text" name="full_name" className="border outline-none" />
            <button type="submit">send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Informasi;
