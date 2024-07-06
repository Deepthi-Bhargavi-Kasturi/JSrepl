class MyArray {

  constructor () {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    
    return this.length;
  }

  get(index) {
    // const item = this.data[index];
    // return item;

    return this.data[index];;
  }

  pop() {
    const item = this.data[this.length -1];
    
    delete this.data[this.length -1];
    this.length--;
    
    return item;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndexes(index);
    
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  shiftIndexes(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
  }

  //Trying some more APIs
  includes(item) {
    for(let i = 0; i < this.length; i++) {
      if(item == this.data[i]) {
        return true;
      }
    }
    return false;
  } //O(n)

  indexOf(item) {
    for(let i = 0; i < this.length; i++) {
      if(item == this.data[i]) {
        return i;
      }
    }
    return -1;
  } //O(n)

  join(separator) {
    let joinedString = this.data[0];

    if(separator == undefined) {
      separator = ',';
    }
    
    for(let i = 1; i < this.length; i+=1) {

      joinedString = joinedString + separator + this.data[i]
      
    }

    return joinedString;
    
  }

  
  
}


const newArray = new MyArray();

newArray.push("Apple");
newArray.push("Mango");
console.log(newArray.push("Banana"));
console.log(newArray);

console.log(newArray.get(0));
console.log(newArray.get(3));
console.log(newArray.pop());
console.log(newArray);

newArray.push("Strawberry");
newArray.push("Kiwi");
newArray.push("Orange");
console.log(newArray);
console.log(newArray.delete(2));
console.log(newArray);


console.log(newArray.includes("Mango"));
console.log(newArray.includes("Banana"));
newArray.push("Kiwi");
console.log(newArray);

console.log(newArray.indexOf("Kiwi"));
console.log(newArray.indexOf("Strawberry"));
console.log(newArray.join());
console.log(newArray.join(''));
console.log(newArray.join('-'));




