// const x=3,y=6,t=[[1,2,3], [4,5,6]];
// let res=[]
// funcation test(x) {
//   let res=[];
//   for(var i=1;i<=x;i++){
//     res.push(i);
//   }
//   return res;
// }
// let t=test(4);
// Array(x).fill(null).map
// for(var i=0 ;i<x;i++){
//   let temp=[]
//   for(var j=0;j<y;j++) {
//     temp.push(<span>{j}</span>)
//   }
//   res.push(<div></div>)
// }
// t.map((items)=>{
//   return <div>items.map()</div>
// })
function range(x,y){
  let res = []
  return res
}
const w$ = new Observale()
const a$ = w$.pipe(
  map(x => x),
  map(y => range(1, 3))
)
