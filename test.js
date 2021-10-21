test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})