const rect={
    perimeter:(x,y)=>2*(x+y),
    area:(x,y)=>x*y
};
function solveRect(l,w){
    console.log(`solving for rectangle with  dimensions: ${l},${w}`);
    if(l<=0 || w<=0){
        console.log(`Rectangle dimension must bne greater than zero.Received:${l},${w}`);}
        else 
        { console.log (`Area of the rectangle: ${rect.area(l,w)}`);
        console.log (`Perimeter of the Rectangle:${rect.perimeter(l,w)}`);
    }
}
solveRect(2,4);
solveRect(3,9);
solveRect(0,5);
solveRect(5,-3);