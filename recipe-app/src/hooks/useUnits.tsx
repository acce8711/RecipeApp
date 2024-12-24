import React, { useState, useEffect } from "react";
import { UnitType} from "../utils/types";

//hook returns an array of units
const useUnits = () => {
    const [units, setUnits] = useState<UnitType[]>([]);

    useEffect(() => {
        const getUnits = async() => {
            const response = await fetch("http://localhost:3000/units");
            const result: UnitType[] = await response.json();
            setUnits([...result]);
        }

        getUnits();

    }, [])

    return {units};
}

export default useUnits;