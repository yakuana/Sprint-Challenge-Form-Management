import React from 'react';   // import react
import { render, fireEvent } from '@testing-library/react';  // import {render, fireEvent} 
import "@testing-library/jest-dom/extend-expect";            // import extend and expect from jest-dom  
import "@testing-library/react/cleanup-after-each";          // import clean up 
import GetDish from "./GetDish.js";                      // import your components 

describe("<GetDish /> Tests", () => {
    
    it("like button adds one to likes", () => {

        const { getByTestId } = render(<GetDish />);

        fireEvent.click(getByTestId("likeButton"));

        expect(getByTestId("likes")).toHaveTextContent(/1/i);
    })

    it("renders 'Leave a like for these dishes!' ", () => {

        const { getByTestId } = render(<GetDish />);

        expect(getByTestId("leaveLikes")).toHaveTextContent(/Leave a like for these dishes!/i);

    })

})