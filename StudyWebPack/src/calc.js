// 1.0 定义add函数
export function add(x, y) {
	console.log(x+y)
	return x + y
}

export function subscribe(x, y) {
	console.log(x-y)
	return x - y
}
// 2.0 导出add方法
// module.exports = add;	//es5
// export default{
// 	add,subscribe
// }
