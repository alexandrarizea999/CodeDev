<template>
	<h1>{{ title }}</h1>
	<p>Welcome...</p>
	<teleport to="#modals" v-if="showModal">
		<Modal theme="sale" @close="toggleModal">
			<template v-slot:links>
				<a href="#">sign up now</a>
				<a href="#">more info</a>
			</template>
			<h1>Ninja Giveaway</h1>
			<p>Grab your ninja swag for half price!</p>
		</Modal>
	</teleport>
	<div v-if="showModalTwo">
		<Modal @close="toggleModalTwo">
			<h1>Ninja Giveaway Two</h1>
			<p>Grab your ninja cap for half price!</p>
		</Modal>
	</div>
	<button @click.alt="toggleModal">open model (alt)</button>
	<button @click="toggleModalTwo">open model two</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
	name: 'App',
	components: {
		Modal
	},
	data() {
		return {
			title: 'This is my first Vue App :)',
			showModal: false,
			showModalTwo: false
		}
	},
	methods: {
		handleClick() {
			console.log(this.$refs.name)
			// $refs allows me to use the [name] ref from the template (DOM section)
			this.$refs.name.classList.add('active')
			this.$refs.name.focus()
		},
		toggleModal() {
			this.showModal = !this.showModal
		},
		toggleModalTwo() {
			this.showModalTwo = !this.showModalTwo
		}
	}
}
</script>

<style>
#app, #modals {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
