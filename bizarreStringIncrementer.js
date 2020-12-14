function bizarreStringIncrementer (bizarre)
{
  let increment;
  var stringarray=[];
  stringarray=bizarre;
 var stringlength=bizarre.length;
 var array=[];
  array=bizarre.match(/\d+/g);
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
    increment=bizarre.replace(replacevalue,(match)=>("0".repeat(replacevaluelength)+(++match)).substr(-replacevaluelength));
    }else if(first>1){
    increment=bizarre.replace(replacevalue,++replacevalue);
    }
   else{
increment = bizarre.replace(array,++array);
  }
    
  }
  }
  else{
increment=bizarre+1;
  }
console.log(increment);
}
