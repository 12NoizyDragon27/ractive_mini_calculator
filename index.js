(function() {

    'use strict';

    let ractive = new Ractive({
        // The `el` option can be a node, an ID, or a CSS selector.
        el: '#container',

        // We could pass in a string, but for the sake of convenience
        // we're passing the ID of the <script> tag above.
        template: '#template',

        // Here, we're passing in some initial data
        data: {
            divisor: '6'
        }
    });

    function addListener(type, id) {
        document.getElementById(id).which = id;
        document.getElementById(id)
            .addEventListener(type, calculate);
    }

    addListener('keyup', 'one');
    addListener('keyup', 'two');
    addListener('keyup', 'three');
    addListener('keyup', 'divisor')

    function square(number) {
        return number * number;
    }

    function calculate(evt) {
        console.log('in calculate');
        switch (evt.target.which) {
            case 'one':
                console.log(ractive.get('one'));
                let one = parseInt(ractive.get('one'), 10);
                let two = square(one);
                ractive.set('two', two);
                let three = one / parseInt(ractive.get('divisor'));
                ractive.set('three', three);
                break;
            case 'two':
                let dos = parseInt(ractive.get('two'), 10);
                let uno = Math.sqrt(dos);
                ractive.set('one', uno);
                let tres = uno / parseInt(ractive.get('divisor'), 10);
                ractive.set('three', tres);
                break;
            case 'three':
                let trois = parseInt(ractive.get('three'), 10);
                let un = parseInt(ractive.get('divisor'), 10) * trois;
                ractive.set('one', un);
                let deux = square(un);
                ractive.set('two', deux);
                break;
            case 'divisor':
                let drei = parseInt(ractive.get('one'), 10) /
                    parseInt(ractive.get('divisor'), 10);
                ractive.set('three', drei);
                break;
                // you'll need to do a lot of error and NaN handling in a
                // producction environment.
            default:
                console.log('hit the default, weird bro');
        }

    }
})();
