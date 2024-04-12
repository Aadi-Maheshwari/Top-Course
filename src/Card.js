import  {FcLike } from "react-icons/fc"
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) =>{
  let course = props.course;
  let likedcourses = props.likedcourses;
  let setlikedcourses = props.setlikedcourses;
  function ClickHandler(){
    if(likedcourses.includes(course.id)){
      setlikedcourses((prev) => prev.filter((cid)=>(cid !== course.id)));
      toast.warning("like hata diya bidu ")

    }
    else{
      if(likedcourses.length === 0){
        setlikedcourses([course.id]);
      }else{
        setlikedcourses((prev)=> [...prev,course.id] )
      }
      toast.success("like kar dala to life jingalala");
    }
  }
  return(
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-100">
      <div className="relative ">
        <img src={course.image.url}/>
        <div className="w-[30px] h-[30px] bg-white absolute right-2 -bottom-3 rounded-full grid place-items-center">
          <button onClick={ClickHandler} >
            {
              likedcourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
            }
          </button>
        </div>
      </div>
        
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2">
          {
            course.description.length > 100 ?(course.description.substring(0,100) ) + "...":(course.description)
          }
          </p>
      </div>
    </div>
  )
}
export default Card;