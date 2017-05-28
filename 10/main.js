Vue.component('modal', {
    template:
    `
    	<div class="modal is-active">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Modal title</p>
				<button class="delete"></button>
			</header>
			<section class="modal-card-body">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate deserunt dolorem ducimus est, ex expedita fuga ipsam nihil, nostrum numquam placeat quae reiciendis rem similique velit voluptate voluptatem voluptates?
			</section>
			<footer class="modal-card-foot">
				<a class="button is-success">Save changes</a>
				<a class="button">Cancel</a>
			</footer>
		</div>
	</div>
    `
});

new Vue ({
    el: '#root'
});
