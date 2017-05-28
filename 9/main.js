Vue.component('coupon', {
    template:
        `
        <input @blur="onCouponApply">

        `,
    methods: {
        onCouponApply() {
            this.$emit('applied')
        }
    }
});

new Vue ({
    el: '#root',
    methods: {
        onCouponApply() {
            alert('it applysass')
        }
    }
});
