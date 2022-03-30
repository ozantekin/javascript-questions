###### 10. Çıktı Nedir?

```javascript

    function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

```

- A: `TypeError`
- B: `SyntaxError`
- C: `Ozan Tekin`
- D: `undefined` `undefined`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

###### <a href="#">Sorunun çözüm videosu hazırlanıyor.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- Sıradan function'larla yaptığımız gibi bir yapıcıya yani `consturctor `'a özellik ekleyemeyiz.
-  Eğer tek seferde tüm nesnelere özellik eklemek istersek `prototype` kullanmamız gerekir.

```javascript

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

```

- Bu durumda `member.getFullName()` çalışmış olacak.

- <b>Hatırlatma:</b>
  - Constructor: Object'in yani nesnenin oluşturduğu yapıcı metoda erişmek için kullanılan özelliktir.
  - Prototype: Javascript’te Inheritance’ın (kalıtımın) temelini oluşturmaktadır. Inheritance var olan class’ları kullanarak, yeni class’lar tanımlanmasına olanak sağlamaktadır.
