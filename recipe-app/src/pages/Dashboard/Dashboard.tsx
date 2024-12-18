import { Link } from "react-router";
import RecipeCard from "./RecipeCard/RecipeCard";

const Dashboard = () => {
    return (
        <>
            <p>Hi, I am Dashboard</p>
            <p>
      You've been logged out.{" "}
      <Link to="/createRecipe">Login again</Link>
      <RecipeCard />
    </p>
        </>
    )
}

export default Dashboard