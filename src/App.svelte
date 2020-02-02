<script>
	import Button from './components/Button.svelte';

	export let name = '';
	export let surname = '';

	// Button variables
	const btnValue = 'Create';
	let count = 0;

	$: computedVal = count % 2 === 0 ? 'even' : 'odd';
	$: if (count >= 12) {
		alert('Stop count and reset!');
		count = 0;
	}

	const handleClick = () => {
		count += 1;
	}
</script>

<main>
	<h1>Hello {name} {surname}!</h1>
	<Button
		name="Create" 
		styles="btn-default_dark"
		handlerCallback={handleClick}
	/>
	<div>
		{count}
	</div>
	<div>
		reactive value - {computedVal}
	</div>
	{#if computedVal === 'even'}
		<div>
			<h1>THIS VALUE IS EVEN</h1>
		</div>
	{:else}
		<div>
			<h1>THIS VALUE IS ODD</h1>
		</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		height: 100%;
		margin: 0 auto;
		background-image: url('https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
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