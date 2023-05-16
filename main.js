var app = new Vue({
    el: '#app',
    data: {
      result: '',
      buttons: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '+', value: '+', class: 'operator' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '-', value: '-', class: 'operator' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '*', value: '*', class: 'operator' },
        { label: '0', value: '0' },
        { label: '.', value: '.' },
        { label: '=', value: '=', class: 'operator' },
        { label: '/', value: '/', class: 'operator' },
        { label: 'C', value: 'C', class: 'operator' },
      ]
    },
    methods: {
      handleClick(button) {
        switch (button.value) {
          case 'C':
            this.result = '';
            break;
          case '=':
            this.result = eval(this.result);
            break;
          default:
            this.result += button.value;
            break;
        }
      }
    }
  });
  