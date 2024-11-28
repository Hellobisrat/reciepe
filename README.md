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

<img src='./src/home.png'>

# receipe details

get the id from the home page when we click based on that
fetch the data and map the ingridient  and image

const {id} = useParams()
  const {recipeDetailsData,setRecipeDetailsData}=useContext(GlobalContext)

  useEffect(()=>{
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const  data        = await response.json()
      if(data?.data){
        setRecipeDetailsData(data?.data)
      }
    }
    getRecipeDetails()
  },[])

  <ul >
    {
    recipeDetailsData?.recipe?.ingredients.map(ingredient=>
      <li>
        <span >{ingredient.quantity} {ingredient.unit}</span>
        <span >{ingredient.description}</span>
      </li>
    )
  }
</ul>


<img src='./src/details.png'>


# favorites
in favorites page using handlefavorite it defined in the context folder it push
list of favorites and displayed

function handleAddToFavorite(getCurrentItem){
    let cpyFavoritesList = [...favoritesList];  // copy the favorites 
    const index = cpyFavoritesList.findIndex(item=>item.id===getCurrentItem.id) // check the new index with the list
    if(index=== -1){
      cpyFavoritesList.push(getCurrentItem) // if it is new push to the copy favorites 
    } else {
      cpyFavoritesList.splice(index)  // push to the copy list
    }
    setFavoritesList(cpyFavoritesList) //  update the favorite list with the copy of cpyFavoritesList
  }

 in the details page the button name changed based on its 
 status if it in the favorites list it appear as Remove from favorites

 {
   favoritesList.findIndex(item=>item.id === recipeDetailsData?.recipe?.id) !== -1 ?
   'Remove from favorites' : 'Add to favorites'
 }

 <img src='./src/favorites.png'>

 # Nov 28 2024 
 
