# Food recipe

# use GlobalContext
in the home page for example
bring recipeList and loading from 
Global context
const {recipeList,Loading}= useContext(GlobalContext)

home page return

if it in loading state
it returns loading....

recipeItem with the prop of item
recipeList.map(item=><RecipeItem item={item}/>)
      : <div>
       <p>Please search another</p> 
        </div>
