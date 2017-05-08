'use strict'

var myApp = require("../app/getprime.js")


describe("Test suite for getPrimes function",function(){
	it("should return an empty array for input less than 2",function(){
		expect(myApp.getPrimes(1)).toEqual([])
	})
	
	it("should return an empty array for input less than 2",function(){
		expect(myApp.getPrimes("string")).toEqual([])
	})

	it("should return [2,3] for 3",function(){
		expect(myApp.getPrimes(5)).toEqual([2,3,5]);
	});

	it("should return [2,3,5] for 6",function(){
		expect(myApp.getPrimes(10)).toEqual([2,3,5,7]);
	});

	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(15)).toEqual([ 2, 3, 5, 7, 11, 13 ])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(21)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(32)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(40)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(51)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(63)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61 ])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(70)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67 ])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(80)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(87)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83])
	});
	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(97)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
	});
});
