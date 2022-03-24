###### 4. Çıktı Nedir?

```javascript

console.log(+true);

console.log(!"Ozan");

```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

###### <a href="#">Sorunun çözüm videosu en yakın zamanda eklenecektir.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- `+`, işlemeye çalıştığı değişkeni sayıya çevirmeye çalışır. Bu yüzden true'yu bir sayıya çevirir. True ve false matematiksel değerleri `true` = 1 ve `false` = 0 dır.
- Şimdi gelelim Ozan'a  `"Ozan"` truthy bir değerdir. `Truthy` ise şu anlama gelir; JavaScript'te true'ya denk olan ve falsy olmayan her değerdir. Buradan yola çıkarsak `!"Ozan"` ile şu soru sorulur aslında bu `Bu truthy değer falsy mi?` bu soruya cevap olarak false çıktsını alırız.
  
<b>Hatırlatma:</b>
- `True` = 1 
- `False` = 0
- `Truthy`: JavaScript'te true'ya denk olan ve falsy olmayan her değer.
- `Falsy`: Yanlış olarak değerlendirebilecek değerler.
- <b>  Flasy değerler:</b> `Boolean false`, `Boş string`, `undefined`, `null`, `NaN (Not a number)`, `Nümerik 0 ya da 0 sonucunu veren bir işlem`.
- <b>Truthy</b> ise bu kapsam içinde olmayan diğer değerlerdir.

  