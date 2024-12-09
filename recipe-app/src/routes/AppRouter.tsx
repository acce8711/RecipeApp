import { Routes, Route} from "react-router";
import Dashboard from '../pages/Dashboard'
import RecipeCreate from '../pages/RecipeCreate/RecipeCreate'

const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="createRecipe" element={<RecipeCreate />} />
        </Routes>
    )
}

export default AppRouter