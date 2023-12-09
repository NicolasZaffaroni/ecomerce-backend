class User {

    static count = 0;

    constructor(firtsName, lastName, age, address){
        this.firtsName = firtsName;
        this.lastName = lastName ;
        this.age = age ;
        this.address = address ;
        
        User.count++;
        
    }
    getFullName(){
        return `${this.firtsName} ${this.lastName}
        `}

        incrementarAge(){
            this.age++;
        }


        getAge(){
            return this.age;
        }


        getAddress(){
            return this.address
        }
}

const user1 = new User(
"Nicolas",
"Zaffaroni",
28,
"Vallespir 99"
);

console.log(user1.getFullName());
user1.incrementarAge();
console.log(user1.getAge());
console.log(user1.getAddress());
