
const Filter = (props) =>{
  let filterData = props.filterData;
  let category = props.category;
  let setcategory = props.setcategory;
  function filterhandler(title){
    setcategory(title);
  }
  return(
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
       return <button
        key={data.id} 
        onClick={()=>filterhandler(data.title)}
        className={`text-lg py-1 rounded-md font-medium hover:bg-opacity-50 bg-black text-white px-2 border-2  transition-all duration-300
        ${category=== data.title
         ?"bg-opacity-60 border-white":
         "bg-opacity-40 border-transparent"}`}>
          {data.title}
        </button>
      })}
    </div>
  )
}
export default Filter;
