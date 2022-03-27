###### 7. Çıktı Nedir?

```javascript

    let a = 3;
    let b = new Number(3);
    let c = 3;

    console.log(a == b);
    console.log(a === b);
    console.log(b === c);

```

- A: `true` `flase` `true`
- B: `flase` `flase` `true`
- C: `true` `flase` `flase`
- D: `flase` `true` `true`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

###### <a href="#">Sorunun çözüm videosu hazırlanıyor.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- `new Number()` yerleşik bir fonksiyon yapıcıdır. Bir sayı gibi görünsede bir sayı değildir.
- `new Number()` => Bir sürü ekstra özelliği vardır ve bir object'tir. Yeni wrapper object oluşturur.
- `a == b` Her ikisinin de 3 değerine sahip olduğunu gördü ve `true` çıktısını almamızı sağladı.
- `a === b` ise `false` çıktısını verdi bize çünkü değer olarak 3 olabilirler ama tür olarak `new Number()` number değil bir object.
- `b === c` için de `a === b` de söylediğimiz aynı şeyler geçerlidir. 
- <b> Hatırlatma:</b> 
  - `Number()` => Argümanı bir sayı değerine dönüştürür. Bunun yerine plus kullanabilirdik. örnek olarak `+x` te kullanılabiliriz.
  - `==` operatörünü kullandığımız zaman sadece aynı değere sahip olup olmadığına bakılır. 
  - `===` operatörünü kullandığımız zaman hem aynı değere hem de aynı türe sahip olup olmadığına bakar.