
Vue.component('modal', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template:
        `
    <div class="modal is-active">
		<div class="modal-background" @click="$emit('close')"></div>
		<div class="modal-content">
			<p class="image is-4by3">
				<slot></slot>
			</p>
		</div>
		<button class="modal-close" @click="$emit('close')"></button>
	</div>
        `,
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});