'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var temp=[];
  for(var i=0;i<collection.length;i++)
  {
  	for(var j=0;j<collection[i].length;j++)
  	{
  		if((temp.indexOf(collection[i][j]))==-1)
  		{
  			temp.push(collection[i][j]);
  		}

  	}
 }
 return temp;
}

module.exports = double_to_one;
