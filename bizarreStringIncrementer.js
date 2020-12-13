function bizarreStringIncrementer (a)
{
  let increment;
  var stringarray=[];
  stringarray=a;
 var stringlength=a.length;
 var array=[];
  array=a.match(/\d+/g);
   var first="0";
  if(array!=null){
first=array.length;
  }
  var lastdigitfetch=stringarray[stringlength-1];
  var LastdigitCheck=lastdigitfetch.match(/\d+/g);
  if(LastdigitCheck!=null){
if(array!=null){
    var replacevalue=array[first-1];
    if(replacevalue.includes("0")){
    var replacevaluelength=replacevalue.length;
    increment=a.replace(replacevalue,(match)=>("0".repeat(replacevaluelength)+(++match)).substr(-replacevaluelength));
    }else if(first>1){
    increment=a.replace(replacevalue,++replacevalue);
    }
   else{
increment = a.replace(array,++array);
  }
    
  }
  }
  else{
increment=a+1;
  }
console.log(increment);
}
