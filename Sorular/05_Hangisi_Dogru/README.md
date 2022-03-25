###### 5. Hangisi Doğrudur?

```javascript

    const bird = {
        size: "small"
    };

    const mosue = {
        name: "Mickey",
        small: true
    };

    console.log(mouse[bird.size]);
    console.log(mouse[bird["size"]]);
    console.log(mouse.bird.size);

```

- A: `mouse.bird.size` geçerli değil.
- B: `mouse[bird.size]` geçerli değil.
- C: `mouse[bird["size"]]` geçerli değil
- D: Bütün şıklar geçerli değildir.

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

###### <a href="#">Sorunun çözüm videosu hazırlanıyor.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- İlk başta doğru şıkları açıklamayla başlayalım: 
  - Köşeli ayraç gösterimini kullandığımızda açılış ayracı `[` ve kapanış ayracını bulana kadar `]` işlem devam eder. Bulduğu zaman ifadeyi değerlendirir. 
  - B: `mouse[bird.size]` => Önce `small` olan `bird.size` değerini değerlendirir. Sonra `mosue["small"]` `true` değerini döndürür. C şıkkı için de bu geçerlidir.
- Şimdi yanlış şıkkımızı açıklayalım: 
  - Nokta ( `.` ) gösterimi ile bu adımları yapamayız. Çünkü `mouse` 'un `bird` adında bir key'i yok, bu da `mouse.bird`'ü `undefined` olarak tanımlamasına neden olur. Bunun ardından `mouse.bird.size` ile yani az önce yaptığımız işleme ek olarak yine nokta gösterimini kullanarak `size` soruyuruz. `mouse.bird` ile `undefined` aldığımızı söylemiştik `mouse.bird.size` ile aslında `undefined.size` sormuş oluyoruz. Bu da geçerli olmayan bir ifadedir. O yüzden bize `undefined` öğesinin `size` özelliği okunamıyor gibi bir hata verir.
- Hatırlatma: 
  - JavaScript'te tüm object key'ler symbol olmadıkları müddetçe string'tir.
  - Key'leri string olarak yazmamış olsak bile arka planda string'e çevrilir.