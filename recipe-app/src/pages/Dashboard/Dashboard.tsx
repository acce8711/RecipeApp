import { Link } from "react-router";
import RecipeCard, { RecipeCardArgs } from "./RecipeCard/RecipeCard";

const MOCK_CARD_DATA: RecipeCardArgs[] = [
    {
        name: 'Noodles',
        time: '1 hr',
        tags: []
    },
    {
        name: 'Noodles',
        time: '1 hr',
        tags: ['Dinner']
    },
    {
        name: 'Noodles',
        time: '1 hr',
        tags: ['OOOh', 'Yum']
    },
    {
        name: 'Noodles',
        time: '1 hr',
        tags: ['wowzzzies']
    }
]

const Dashboard = () => {
    return (
        <>
            <p>Hi, I am Dashboard</p>
            <p>
                You've been logged out.{" "}
                <Link to="/createRecipe">Login again</Link>
            </p>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4 md:grid-cols-2">
                {MOCK_CARD_DATA.map(card => 
                    <RecipeCard name={card.name} tags={card.tags} time={card.time}/>
                )}
            </div>
        </>
    )
}

export default Dashboard