###### 1. Çıktı Nedir?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);

  var name = 'Ozan';
  let age = 21;
}
sayHi();
```

- A: `Ozan` and `undefined`
- B: `Ozan` and `ReferenceError`
- C: `ReferenceError` and `22`
- D: `undefined` and `ReferenceError`

<details><summary><b>Cevap</b></summary>
<p>

##### Cevap: D
###### <a href="https://youtu.be/GSVvqtEa2MY">Sorunun çözüm videosu için tıkla.</a>
</details>


<h1 align="center">Notlarım</h1>


- Hoisting, Interpreter'ın önce tanımlanan şey hakkında hafızada yer açması anlamına gelir.
  - Var anahtar kelimesi ile tanımladığımız name değişkenini gördü ama yukarı taşınmadığı için tanımlayamadı o yüzden `undefined` aldık. Çünkü tanımlandığı satır gelene kadar bir değere sahip olamaz. Yani elimizde bir adresin var ama bu adresin boş olduğunu söyler.
  - Let ve const anahtar kelimeleri için ise hoisting uygulanır ancak değer ataması yapılmaz. Değişken tanımladığımız satırden önce erişilebilir değildir. Buna temporal dead zone yani geçiçi ölü bölge de denir. Bu yüzden `ReferenceError` alırız. 