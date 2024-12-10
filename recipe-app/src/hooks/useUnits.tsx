import React, { useState, useEffect } from "react";

interface Unit {
    id: number;
    unit: string;
  }

//hook returns an array of units
const useUnits = () => {
    const [units, setUnits] = useState<string[]>([]);

    useEffect(() => {
        const getUnits = async() => {
            const response = await fetch("http://localhost:3000/units");
            const result: Unit[] = await response.json();
            const result_units: string[] = result.map((x) => (x.unit))
            setUnits([...result_units]);
        }

        getUnits();

    }, [])

    return {units};
}

export default useUnits;