export function optimizeIntervals(intervals: Array<number[]>) {
  intervals = intervals.sort( (a, b) => a[0] - b[0] );
  const optimized = [];
  let [begin, end] = intervals[0];
  for(const [b, e] of intervals){
    if(b <= end)
      end = [end, e][+(e>end)];
    else{
      optimized.push([begin, end]);
      [begin, end] = [b, e];
    }
  }
  return [...optimized, [begin, end]];
}
