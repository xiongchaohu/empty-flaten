'use strict';

function double_to_one(collection) {

  //在这里写入代码
  	var temp=[];
	for(var i=0;i<collection.length;i++)
  	{

  		if(collection[i] instanceof Array)
  		{
  			for(var j=0;j<collection[i].length;j++)
 			{
  				temp.push(collection[i][j]);
  			}
  				
		}
  		else{
  			temp.push(collection[i]);
	  			
 		}
  	}
  	return temp;
}

module.exports = double_to_one;
