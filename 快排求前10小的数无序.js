利用快排的思想，寻找第k个位置上正确的数，k位置前面的数即是比k位置小的数组，k后面的数即是比k位置元素大的数组。
public ArrayList<Integer> GetLeastNumbers_Solution(int [] input, int k) {
  ArrayList<Integer> res = new ArrayList<Integer>();
  if (input==null||input.length==0||input.length<k||k<=0) {
      return res;
  }

  int start  = 0;
  int end = input.length-1;
  int index = partition(input, start, end);
  //一直循环知道找到第k个位置正确的数。
  while (index != k - 1) {
      if (index > k - 1) {
          end = index-1;
          index = partition(input, start, end);
      } else {
          start = index+1;
          index = partition(input, start, end);
      }

  }

  for (int i = 0; i < k; i++) {
      res.add(input[i]);
  }

  return res;
}

static int partition(int input[], int start, int end) {
  int tmp = input[start];
  while (start < end) {
      while (start < end && input[end] >= tmp) {
          end--;
      }
      input[start] = input[end];
      while (start < end && tmp >= input[start]) {
          start++;
      }
      input[end] = input[start];
  }
  input[start] = tmp;
  return start;
}
1
