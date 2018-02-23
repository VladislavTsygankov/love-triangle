/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var x=0;
  var y=0;
  var count=0;
  var i=0;
  while (i<preferences.length+1){
    if (preferences[i]!=i+1)
    {
      x=preferences[i];
      if (preferences[x-1]!=x)
      {
        y=preferences[x-1];
        if(preferences[y-1]==i+1 && preferences[y-1]!=y)
        {
          count++;
          i++;
        }
        else i++;
      }
      else i++;
    }
    else i++;


  }
  return count/3;
  // your implementation
};
