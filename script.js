const newyear=new Date('2025-01-01');
const currentdate=new Date();
const diffmilliseconds=newyear-currentdate;
const diffdates=diffmilliseconds/(1000*60*60*24);
//Milliseconds: 7776000000 ms
//Seconds: 7776000000 / 1000 = 7776000 seconds
//Minutes: 7776000 / 60 = 129600 minutes
//Hours: 129600 / 60 = 2160 hours
//Days: 2160 / 24 = 90 days
document.getElementById("currentcount").innerText=Math.floor(diffdates);
console.log(`${Math.floor(diffdates)}`);
