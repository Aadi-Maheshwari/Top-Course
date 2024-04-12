import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import Spiner from "./Spiner";
import { toast } from "react-toastify";

const App = () => {

  const [courses,setcourses] = useState([]);
  const [loading,setloading] = useState(true);
  const [category,setcategory] = useState(filterData[0].title);
  async function  fetchdata() {
      setloading(true);
       try{
        let result = await fetch(apiUrl);
        let output = await result.json();
        setcourses(output.data);
       }
       catch(error){
        toast.error("kuch to gadbad hai !");
       }
       setloading(false);
    }
    useEffect(() => {
    fetchdata()
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
      <Navbar/>
      </div>
      <div className="bg-bgDark2 ">
        <div>
        <Filter filterData={filterData}
        category={category}
        setcategory={setcategory}/>

        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spiner/>) : (<Cards courses={courses} category={category} />)
      }
        </div>
      </div>
    </div>
  )
};

export default App;
