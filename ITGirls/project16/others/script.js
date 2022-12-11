let list= ['js', 'css', 'html']
alert(list[0])

let mass=[0, 1, false, 2, undefined, '', 3, null]
let showMass= mass.filter(Number);
console.log(showMass); 
  

let arr=[[1,2], [1,2,3], [1,2,3,4]]
result=[]
for(i = 0; i < arr.length; i++)
{
if (arr[i].length>3) 
{result.push(i)}
}
console.log(result)
