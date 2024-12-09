import { Link } from "react-router";

const Dashboard = () => {
    return (
        <>
            <p>Hi, I am Dashboard</p>
            <p>
      You've been logged out.{" "}
      <Link to="/createRecipe">Login again</Link>
    </p>
        </>
    )
}

export default Dashboard