function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person("Ozan", "Tekin");
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  console.log(member.getFullName());

  /*
  
    Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
    };

  */