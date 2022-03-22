###### 3. Çıktı Nedir?

```javascript
const shape = {
  radius:10,
  diameter(){
    return this.radius * 2;
  },
  perimeter: () => 2*Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

###### <a href="#">Sorunun çözüm videosu için tıkla.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- `diameter` sıradan bir fonksiyon `perimeter` ise arrow fonksiyon dikkat edelim bu noktaya.
- Arrow fonksiyonlarda, `this` anahtar kelimesi sıradan fonksiyonların aksine kendi kapsama alanı olan scope'u referans alır. Bu da demek oluyor ki `perimeter`'i çağırdığımız zaman `shape` objesini değil kendi kapsama alanını yani scope'unu referans alacaktır (örneğin window).
- Yani perimeter arrow function olduğu için kapsama alanı içinde `radius` değeri yoktur o yüzden `undefined` alıyoruz.
- <b>Özet:</b> `perimeter` içinde Arrow Function kullanılmış dikkat! Arrow fonksiyon için kendi kapsama alanı yani scope'u önemlidir.