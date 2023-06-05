class BinarySearchtree {
    // ...existing code...
  
    findPrimes(root) {
      const primes = [];
      this.findPrimesHelper(root, primes);
      return primes;
    }
  
    findPrimesHelper(root, primes) {
      if (root) {
        if (this.isPrime(root.value)) {
          primes.push(root.value);
        }
        this.findPrimesHelper(root.left, primes);
        this.findPrimesHelper(root.right, primes);
      }
    }
  
    isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  }
  
  const bst = new BinarySearchtree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(6);
  bst.insert(3);
  bst.insert(11);
  
  console.log(bst.findPrimes(bst.root)); // [5, 3, 11]
  