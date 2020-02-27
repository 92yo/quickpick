import Toggle from './toggle'
import Button from './toggle'
import { render,fireEvent } from '@testing-library/react';
import React from 'react'


describe("---<<< User Info testing >>>---",()=>{
    test("Testing .....",()=>{
        const {getByText} = render(<UserInfo/>)
        fireEvent();
        //const buttonNode = getByText("Show");
        //fireEvent().arguments
        getByText("Hide");
    })
});