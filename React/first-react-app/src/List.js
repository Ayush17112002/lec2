/**
 *
 * props:{
 *  list:['a','b']
 *  children:[<div>I am nested child1</div>, <div>I am nested child2</div>]
 * }
 */

export default function List(props) {
  console.log(props.children);
  return <div className="list">{props.children}</div>;
}
