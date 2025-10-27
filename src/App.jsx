import React from "react";

const App = () => {
  return (
    <div className="App  ">
      <h1 className="text-4xl text-center">Notes App </h1>

      <div className="flex gap-5 ">
        <div className="bg-blend-hard-light flex flex-col gap-3.5 h-screen w-2/4  px-10 py-20 ">
          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Notes Heading "
              className=" h-[50px] w-full  font-medium outline-noneborder-2 rounded m-2  p-2"
            />
            <textarea
              type="text"
              name=""
              id=""
              placeholder="Notes  "
              className=" h-[90px] w-full font-medium outline-none border-2 rounded m-2  p-2"
            />
            <button className="bg-white text-black outline-none p-3 m-2  rounded w-full ">
              Add Note
            </button>
          </form>
        </div>
        {/* <div>
          <img
            src="https://www.pngmart.com/files/20/Pen-Writing-PNG-Photos.png"
            alt=""
            className="h-100 w-100"
        
          />
        </div> */}
      </div>
    </div>
  );
};

export default App;
