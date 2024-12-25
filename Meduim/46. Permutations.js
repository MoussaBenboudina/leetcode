/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const n = nums.length;


    function back(path) {
      if(path.length === n) {
        result.push([...path]) ;
        return;
      }

      for (let num of nums) {
          if(!path.includes(num)) {
            path.push(num)
            back(path)
            path.pop()
          }
          
      }
    }

    back([])
    return result;
};