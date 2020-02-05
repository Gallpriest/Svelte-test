<script>
    import { createEventDispatcher } from 'svelte';

    export let name = '';

    const dispatch = createEventDispatcher();
    const handleClick = () => dispatch('active', { name });
</script>

<button type="button" on:click={handleClick}>
    { name }
</button>