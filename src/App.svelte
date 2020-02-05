<script>
	export const start = '';
	import Tabs from './containers/Tabs/Tabs.svelte';

	const tabs = ['First', 'Second', 'Third'];
	const content = [
		{ id: 'First', data: 'Anton' },
		{ id: 'Second', data: 'Kirill' },
		{ id: 'Third', data: 'Julia' },
	]
	const props = { tabs, content };
</script>

<main>
	<h1>Hello!</h1>
	<div>{start}</div>
	<Tabs {...props}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		height: 100%;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>