const Fibonacci = (n) => {
	return n <= 2 ? 1 : Fibonacci(n - 1) + Fibonacci(n - 2);
}
export default Fibonacci;
