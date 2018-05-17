var person = {
    firstname: "Portia",
    lastname: "Akakisiima",
    age: 56,
    fullname : function(){
        return this.firstname + '' + this.lastname;
    },
        editname : function(newname){
            return this.firstname;

    }
    
    };

console.log(person.age);
console.log(person.fullname());
person.editname('Lema','Andrew');
console.log(person.fullname());


class Person {
    constructor(firstname,lastname,age, gender ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }
    getName(){
        return this.firstname + '' + this.lastname;
    }
    getAge(){
        return this.getFullName() + ' is ' + this.age + 'years old' ; 
    }
    getGender(){
        return this.getFullName() + ' is ' + this.gender;
    }

 }
 class Male extends person{
     constructor (firstname,lastname, age,gender = "Male"){
        super(firstname,lastname,age,gender);
     }
 }


 class Female extends person {
     constructor (firstname,lastname,age, gender= "Female"){
        super(firstname,lastname,age,gender);

     }
 }
 var jonah = new person('Jonah','Kisoro', 6);
 console.log(jonah.firstname) ;
 console.log(jonah.getAge());

 var joan = new person('Joan','nalubega',12);
 console.log(joan.getGender());






