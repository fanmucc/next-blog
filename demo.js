var a = 1;
if (true) {
	console.log(a); // Function
	a = 2; // 这里为什么修改的是全局a 不是a函数的
	function a() {
		console.log("===");
	}
	a = 20; // 这里修改的又是函数a了
	console.log(a); // 20
}
console.log(2); // 2
