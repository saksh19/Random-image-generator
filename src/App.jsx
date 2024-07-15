  import React, { useState,useEffect } from 'react';
  import './App.css'
  function App() {
    const [type, setType] = useState("");
    const [path, setPath] = useState("");
    const [check,setCheck]= useState(false)

useEffect(()=>{if(type === ""){
  setCheck(false)
}},[type])
    const fetchImage = async () => {

      if(type !==""){
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/randomimage?category=${type}&width=600&height=500`, {
          headers: {
            'X-Api-Key': 'q/FUL2c9nA9FWa6weAKpNw==TZnB3Bzbxstf4C4l',
            'Accept': "image/jpg"
          }
        });
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setPath(imageUrl);
        setCheck(true)
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }else {
      alert("Please enter category")

    }
  };
    
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen body">
          <div className="mb-4 w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-semibold text-center mb-4">Enter Akshat Category</h2>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="category"
                id="category"
                className="block w-full rounded-md border-2 border-gray-300 py-2 pl-4 pr-16 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter category here"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="submit"
                  onClick={fetchImage}
                  className="h-full bg-indigo-600 px-4 py-2 text-white font-semibold rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-6">
           { check &&<img id="card-image" className="w-full" src={path} alt="Card" />}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{`Random ${type} Image`}</div>
              <p className="text-gray-700 text-base">
                Here is a randomly fetched image based on the category you entered.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default App;
