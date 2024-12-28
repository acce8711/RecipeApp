import { useState } from "react";
import { MIN_SERVINGS } from "../../utils/Constants";

const useServingsManager = () => {
    const [servings, SetServings] = useState<number>(0)

    //function to update the servings value
    const handleServingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const numValue = value === "" ? 0 : parseInt(value)
        
        if(Number.isInteger(numValue) && numValue >= MIN_SERVINGS)
            SetServings(numValue)
        else
            console.log("Invalid servings range. Must be greater than 0")
    }

    return {
        servings,
        handleServingsChange
    }
}

export default useServingsManager;