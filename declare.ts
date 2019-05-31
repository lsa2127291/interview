/* 错误 */
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}
function fn(x: (a: string, b: number, c: number) => void) { }
var x1: Example;
// When written with overloads, OK -- used first overload
// When written with optionals, correctly an error
fn(x1.diff);
