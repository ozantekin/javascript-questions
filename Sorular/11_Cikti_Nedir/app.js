function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const ozan = new Person("Ozan", "Tekin");
  const nida = Person("Nida", "Tekin");
  
  console.log(ozan);
  console.log(nida);