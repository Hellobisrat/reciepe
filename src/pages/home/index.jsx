import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item"



export default function Home (){
  const {recipeList,loading}=useContext(GlobalContext)

  if(loading) return <div>Loading...Please wait</div>

  return<div className="py-8 
  container
  flex
  flex-wrap
  justify-center
  gap-10
  mx-auto">

    {
      recipeList && recipeList.length > 0 ?
      recipeList.map(item=><RecipeItem item={item}/>)
      : <div>
       <p className="lg:text-4x1 text-xl text-center text-black font-extrabold">Please search another</p> 
        </div>
    }
  </div>

}