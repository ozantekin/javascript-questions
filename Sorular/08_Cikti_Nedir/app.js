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
