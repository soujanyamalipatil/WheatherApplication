import SelectionForm from "./SelectionForm"
import {fireEvent,queryByTestId, render } from '@testing-library/react';

describe("input box",()=>{
    it("input render",()=>{
        let {queryByTitle}=render(<SelectionForm/>);
        let input=queryByTitle('countryName');
        expect(input).toBeTruthy()
    })

    it("input onChange",()=>{
        let {queryByTestId}=render (<SelectionForm />)
        let input = queryByTestId("content-input")
        fireEvent.change(input,{target:{value:"testValue"}})
        expect(input.value).toBe("testValue")
    })
})

describe("button",()=>{
    
    it("login button render",()=>{
        let {queryByTestId}=render (<SelectionForm />)
        let input = queryByTestId("content-input")
        fireEvent.change(input,{target:{value:"testValue"}})
        let {queryByTitle} = render(<SelectionForm />)
        let btn = queryByTitle("countryBtn")
        expect(btn).toBeTruthy()
    })
    it("onSubmit",()=>{
        let {queryByTestId}=render (<SelectionForm />)
        let input = queryByTestId("content-input")
        fireEvent.change(input,{target:{value:"testValue"}})
        let {queryByTitle} = render(<SelectionForm />)
        let btn = queryByTitle("countryBtn")
        fireEvent.submit(btn)
        
    })
})