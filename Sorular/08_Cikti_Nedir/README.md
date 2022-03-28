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

    const osman = new Chamelon({ newColor: 'purple' });
    console.log(osman.colorChange('orange'));

```

- A: `true` 
- B: `purple` 
- C: `green`
- D: `TypeError` 

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

###### <a href="#">Sorunun çözüm videosu hazırlanıyor.</a>

</p>
</details>

<h1 align="center">Notlarım</h1>


- `colorChange` fonksiyonu statiktir. 
- Statik yöntemler yalnızca oluşturuldukları constructor içinde kullanılabilirler ve herhangi bir alt öğeye aktarılmazlar veya clss örneklerine çağrılmazlar.
- `osman` 'Chamelon' sınıfının bir örneği olduğundan fonksiyon buna çağrılamaz. Bu yüzden `TypeError` alırız.