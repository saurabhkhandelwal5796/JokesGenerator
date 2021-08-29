/**
 * Q1) what is promises (callback hell se bachne ke liye promises ka use karte hai)
 * ans) jabb bhee fetch api se data call karte hai, toh 2 condition
 * condition1) fulfilled(matlab data mil gaya)
 * condition 2) rejected (matlab koi internet/server error karan se data nahi mila)
 * condition 3) ongoing (matlab setTimeOut me 1 year daal diya toh nahi pata ki milega yaa nahi 1 year baad)
 * 
 * TAREEKA -> fetch(https://restcountries.eu/rest/v2/name/nepal)
 * 
 * 
 * 90% PROMISES are consumed only 10% promises are created(in advance js)
 * fetch(api link) <- isko consume karna hai
 * either fullfilled  
 * or rejected 
 * or ongoing state. 
 * 
 * issme buss then then then then then yeh hee type karte rehte hai buss.
 * 
 * eg: chreome purr type => dad joke api
 * then select icanhazdadjoke.com
 * 
 */