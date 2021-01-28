const rectangle = require('./rectangle');
const rect=
  require('./rectangle');

function solveRect(l,w){
    console.log(`solving for rectangle with  dimensions: ${l},${w}`);
   rect(l,w,(err,rectangle)=>{
       if(err){
           console.log('ERROR:',err.message);
       }
   
        else 
        { 
            console.log (`Area of the rectangle with dimension: ${l},${w} is : ${rectangle.area()}`);
        console.log (`Perimeter of the Rectangle with dimension: ${l},${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log(`This statement is logged after the call to rect() `);
}
solveRect(2,4);
solveRect(3,9);
solveRect(0,5);
solveRect(5,-3);