import { useState } from "react";
import { DurationRange } from "../../utils/Constants";

const useDurationManager = () => {
    const [hours, SetHours] = useState<number>(0)
    const [minutes, SetMinutes] = useState<number>(0)

    //function to update the hour value on input change if within the range
    const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const numValue = value === "" ? 0 : parseInt(value)
        
        if(Number.isInteger(numValue) && numValue >= DurationRange.MIN_HOUR_MINUTES)
            SetHours(numValue)
        else
            console.log("Invalid hour range. Must be greater than 0")
    }

    const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const numValue = value === "" ? 0 : parseInt(value)
        
        if(Number.isInteger(numValue) && numValue >= DurationRange.MIN_HOUR_MINUTES && numValue <= DurationRange.MAX_MINUTES)
            SetMinutes(numValue)
        else
            console.log("Invalid Minute range. Must be between 0 and 60")
    }

    return {
        hours,
        minutes,
        handleHourChange,
        handleMinuteChange
    }
}

export default useDurationManager;