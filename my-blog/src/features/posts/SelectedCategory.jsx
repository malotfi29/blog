import PostsLayout from "./PostsLayout";
import useCategory from "./useCategory"


function SelectedCategory() {
    const{categories,selectedCategory}=useCategory()
    const category=selectedCategory.slug
   
    
  return <PostsLayout category={category}/>
}

export default SelectedCategory
