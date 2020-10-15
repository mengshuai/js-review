/**
 * @param {number[]} nums
 * @return {number}
 */
//使用set判断是否重复
// const FindRepeatNumber1 = (nums: { [x: string]: any }) => {
//   let s = new Set();
//   for (var i in nums) {
//     var curLenth = s.size;
//     s.add(nums[i]);
//     if (s.size == curLenth) return nums[i];
//   }
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
//哈希表
const FindRepeatNumber = function(nums: any) {
  const map = {};
  for (const num of nums) {
    if (!map[num]) {
      map[num] = true;
    } else {
      return num;
    }
  }
};
export default FindRepeatNumber;
