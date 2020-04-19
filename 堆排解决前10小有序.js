利用堆排序，特别适用于海量数据中寻找最大或者最小的k个数字。即构建一个大堆容器，初始化大小为k，变量初始数，如初始数组大小小于等于k直接返回，如果大于k，则选择数组的前k个元素，填充堆，然后调整为最大堆。调整完之后，继续从初始数组中拿出一个元素，如果该元素比大堆的堆顶小，则替换堆顶，继续调整为最大堆，如果大于等于堆顶则直接丢弃，不作调整。 
PS：大堆还是小堆的选择很重要，不是寻找最小的k个元素就要选择小堆，而且恰恰相反。寻找最小的k个数，其实就是寻找第k个大的元素，即寻找k个数中最大的，不断调整堆，堆得元素个数是k，堆顶是最大值，遍历完初始数组后，堆中存在的元素即使我们所要寻找的k个最小元素。

//堆排序：构建堆，不断调整的过程，从最后一个不是叶子节点的节点开始。
    static public ArrayList<Integer> GetLeastNumbers_Solution1(int[] input, int k) {
        ArrayList<Integer> res = new ArrayList<Integer>();
        if (input==null||input.length==0||input.length<k) {
            return res;
        }
 
        int []maxHeap = new int[k];
        //初始化堆
        for (int i = 0; i < maxHeap.length; i++) {
            maxHeap[i] = input[i];
        }
        //将初始化的堆调整为最大堆
        for (int i = (maxHeap.length-1)/2; i >=0 ; i--) {
            adjustHeap(maxHeap, i);
        }
        //遍历初始数组不断调整最大堆
        for (int i = k; i <input.length ; i++) {
            if (maxHeap[0]>input[i]) {
                maxHeap[0] = input[i];
                adjustHeap(maxHeap, 0);
            }
 
        }
 
        for (int i = 0; i < maxHeap.length; i++) {
            res.add(maxHeap[i]);
        }
 
        return res;
    }
 
    static void adjustHeap(int maxHeap[],int i){
 
        int index = i;
        int lchild=2*i+1;       //i的左孩子节点序号 
        int rchild=2*i+2;     //i的右孩子节点序号 
        if(index<=(maxHeap.length-1)/2) {
            //寻找子节点中最大的节点
            if (lchild<maxHeap.length&&maxHeap[index]<maxHeap[lchild]) {
                index = lchild;
            }
            if (rchild<maxHeap.length&&maxHeap[index]<maxHeap[rchild]) {
                index = rchild;
            }
 
            if (i!=index) {
                //将节点与最大的子节点交换
                int tmp = maxHeap[index];
                maxHeap[index] = maxHeap[i];
                maxHeap[i] = tmp;
                //交换后，子树可能不满足最大推，递归调整。
                adjustHeap(maxHeap, index);
            }
        }
1