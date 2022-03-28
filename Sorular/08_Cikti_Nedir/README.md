###### 8. Çıktı Nedir?

```javascript

    class Chameleon {
      static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
      }

      constructor( {newColor = 'green' } = {}) {
        this.newColor = newColor;
      }
    }

    const osman = new Chameleon({ newColor: 'purple' });
    console.log(osman.colorChange('orange'));

```

- A: `true` 
- B: `purple` 
- C: `green`
- D: `TypeError` 

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

###### <a href="https://youtu.be/_MNmSIG7JA0">Sorunun çözüm videosu için tıkla.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- `colorChange` fonksiyonu statiktir. 
- Statik yöntemler yalnızca oluşturuldukları constructor içinde kullanılabilirler ve herhangi bir alt öğeye aktarılmazlar veya class örneklerine çağrılmazlar.
- `osman`, 'Chameleon' class'ının bir örneği olduğundan fonksiyon buna çağrılamaz. Bu yüzden `TypeError` alırız.
- <b> Hatırlatma: </b>
  - Static metotlar ES6 ile gelen özelliklerden biridir.
  -  ES5 ile bir class içindeki metot ya da özelliklere ulaşmak istiyorsak new classAdı() şeklinde yeni bir sınıf örneği oluşturup bu sınıf örneği üzerinden istediğimiz özelliklere ulaşabiliyorduk.
  -   Static metotlar bize new anahtar kelimesini kullanmadan `sınıfAdı.ozellik` şeklinde objesiz ulaşabilme imkanı sağlar.