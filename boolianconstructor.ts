function booleanTest(bVar:boolean):void{
    console.log(bVar.valueOf()); 
  }
  var boolean1:boolean=new Boolean(true);
  var boolean2:boolean=new Boolean(false); 
  var boolean3:boolean=true;
  booleanTest(boolean1);
  booleanTest(boolean2);
  booleanTest(boolean3);