###### 9. Çıktı Nedir?

```javascript

    let merhaba; 
    merhaab = {}; // yazım hatası!
    console.log(merhaab);

```

- A: `{}` 
- B: `ReferenceError: greetign is not defined` 
- C: `undefined`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

###### <a href="https://youtu.be/igInuHXJruE">Sorunun çözüm videosu için tıkla.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- Nesneyi log'a kaydeder çünkü global nesne üzerinden boş bir nesne oluşturduk.
- `merhaba`'ı `merhaab` olarak yanlış yazdık fark ettiyseniz. JavaScript yorumlayıcısı bunu `global.merhaab = {}` olarak görür veya `window.merhaab = {}` olarak görür.
- Bu tarz hatalardan kaçınmak için `use strict` kullanılabilir. 
- `"use strict";`, bir değişkene herhangi bir atama yapmadan önce tanımlanıp tanımlanmadığına bakar. Tanımlanmamışsa hata almamızı sağlar.
- `use strict` hakkında daha detaylı bilgi sahibi olmak isterseniz <a href="https://medium.com/@ozantekindev/javascript-use-strict-nedir-f73d6b14af05"> bu yazımı </a> okuyabilirsiniz.