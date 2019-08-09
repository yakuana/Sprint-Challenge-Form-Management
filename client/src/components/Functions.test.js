import React from 'react';   // import react
import "@testing-library/jest-dom/extend-expect";            // import extend and expect from jest-dom  
import "@testing-library/react/cleanup-after-each";          // import clean up 
import { multiply, negativeNumber } from "./Functions.js"                      // import your components 

describe("<Functions /> Tests", () => {
   
    it("multiply() multiplies 2 numbers and returns result", () => {
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(3, 9)).toBe(27);
        expect(multiply(7, 4)).toBe(28);
    })
    
    it("negativeNumber() check if number is less than 0", () => {
            expect(negativeNumber(-1)).toBe(true);
            expect(negativeNumber(1)).toBe(false);
    })
    

})