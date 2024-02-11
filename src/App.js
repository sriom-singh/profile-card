import { useEffect, useState } from "react";
import background from "./email.png";
function App() {
  const [data, setData] = useState(null);
  async function apiCall() {
    const data = await fetch(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    const result = await data.json();
    setData(result.results[0]);
  }
  console.log(data);
  useEffect(() => {
    apiCall();
  }, []);
  return (
    data && (
      <div className=" w-screen h-screen flex bg-black justify-center items-center ">
        <header className=" w-80 h-[500px] rounded-2xl  overflow-hidden">
          <div className="w-full h-24 flex justify-center items-end bg-zinc-700">
            <div className="w-full h-1/3 flex relative justify-center items-end  bg-sky-300 ">
              <img
                className="w-28 object-cover absolute -bottom-6 border-4 rounded-full h-28"
                src={data.picture.large}
              />
            </div>
          </div>
          <div className="w-full text-black justify-center gap-1 flex px-10 flex-col bg-zinc-100 pt-6 pb-4">
            <h1 className="text-2xl text-center flex w-full justify-center font-thin font-sans pb-4 text-zinc-600 gap-2">
              {data.name.title}{" "}
              <p className=" text-black">{data.name.first}</p>{" "}
              {data.name.last}{" "}
            </h1>

            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">Age</p>
              <p className="flex-1"> {data.dob.age}</p>
            </h1>
            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">DOB</p>
              <p className="flex-1"> {data.dob.date.slice(0, 10)}</p>
            </h1>
            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">Cell</p>
              <p className="flex-1"> {data.cell}</p>
            </h1>
            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">Phone</p>
              <p className="flex-1"> {data.phone}</p>
            </h1>
            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">Gender</p>
              <p className="flex-1"> {data.gender}</p>
            </h1>
            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">City</p>
              <p className="flex-1"> {data.location.city}</p>
            </h1>
            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">Country</p>
              <p className="flex-1"> {data.location.country}</p>
            </h1>
            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">State</p>
              <p className="flex-1"> {data.location.state}</p>
            </h1>

            <h1 className="flex px-2 justify-between text-sm">
              <p className="text-blue-700 flex-1 font-bold">Post code</p>
              <p className="flex-1"> {data.location.postcode}</p>
            </h1>
            <h1 className="flex px-2 justify-between pb-4 text-sm">
              <p className="text-blue-700 flex-1 font-bold">Street</p>
              <p className="flex-1">
                {data.location.street.name} {data.location.street.number}
              </p>
            </h1>
            <h1></h1>
          </div>
          <div className=" bg-sky-300 p-1 items-center w-full flex justify-center gap-1 ">
            <img className="w-3 h-2 " src={background}></img>
            <p className="text-center text-[10px] text-zinc-800 font-bold ">
              {data.email}
            </p>
          </div>
          <div className=" bg-zinc-700 w-full h-16"></div>
        </header>
      </div>
    )
  );
}

export default App;
