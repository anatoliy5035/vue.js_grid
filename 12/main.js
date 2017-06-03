Vue.component('coupon', {
    template:
    `
        <input type="text" :value="code" @input="updateCode($event.target.value)">
    `,
    methods: {
        updateCode(code) {
            if(code === 'ALLFREE') {
                alert('no valid');
                return;
            }
            this.$emit('input', code);
        }
    }
});

new Vue ({
    el: '#root'
});
