/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//数组降维
var FindNumberIn2DArray = function(matrix: any[], target: any) {
  return matrix.flat(Infinity).includes(target);
};
export default FindNumberIn2DArray;
