###### 2. Çıktı Nedir?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

###### <a href="#">Sorunun çözüm videosu için tıkla.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- `Var` bir global scope'tur. Var ile tüm döngü yinelemelerimiz için yalnızca bir paylaşılan bağlama sahip oluruz.
  - Yani, her `setTimeout` geri çağrısındaki i, döngü yinelemesi sona erdikten sonra hepsini 3'e eşit olan aynı değişken haline getirmeye çalışacaktır.
- `Let` ise bir blok scope'tur  ve for döngüsünde kullanıldığında her yineleme için yeni bir bağlam elde edersiniz.
  - Yani her `setTimeout` geri çağrısındaki i, her biri farklı bir değere sahip olan farklı bir değişken haline getirmeye çalışacaktır.