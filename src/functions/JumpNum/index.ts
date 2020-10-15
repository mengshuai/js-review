const JumpNum = (num: number) => {
  if (num === 1) return 1;
  if (num === 2) return 2;
  return JumpNum(num - 1) + JumpNum(num - 2);
};
export default JumpNum;
