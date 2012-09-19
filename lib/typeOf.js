function typeOf(v){
 var result = typeof(v);
    if (v === null) {
        result = "null";
    }
  if (result === "object"){
  result = "@unknown";
  if(v.constructor){
   var sConstructor = v.constructor.toString();
   var iStartIdx = sConstructor.indexOf(' ' ) + 1;
   var iLength = sConstructor.indexOf('(' ) - iStartIdx;

   var sFuncName = sConstructor.substr(iStartIdx, iLength);
   if (iStartIdx && sFuncName) result = sFuncName;
  }
 }
 return result.toLowerCase();
}