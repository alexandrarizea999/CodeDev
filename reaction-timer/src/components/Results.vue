<template>
	<p>Reaction time - {{ score }} ms</p>
	<p class="rank">{{ rank }}</p>
  </template>
  
  <script>
  export default {
	props: ['score'],
	data() {
	  return {
		rank : null
	  }
	},
	mounted() {
	  if (this.score < 250) {
		this.rank = 'Tututututu'
	  } else if (this.score < 400) {
		this.rank = 'Not so Tututututu'
	  } else {
		this.rank = 'You are a Liam... Work harder to become a Tsunoda :)'
	  }
	}
  }
  </script>
  
  <style>
	.rank {
	  font-size: 1.4em;
	  color: #0faf87;
	  font-weight: bold;
	}
  </style>