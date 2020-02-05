<script>
    import TabButton from './TabButton.svelte';

    export let content = []; // { id: string, data: any }[]
    export let tabs = []; // string[]

    let activeState = tabs[0];

    const setActiveTab = event => activeState = event.detail.name;
</script>

<section class="tabs">
    {#if !!content && !!tabs}
        <div class="tabs__buttons">
            {#each tabs as tabName}
                <TabButton
                    name={tabName}
                    on:active={setActiveTab}
                />
            {/each}
        </div>
        <div class="tabs__info">
            {#each content as { id, data }}
                {#if activeState === id }
                    <div>
                        { data }
                    </div>
                {/if }
            {/each}
        </div>
    {:else }
        <div>
            There is no data provided for the component... =(
        </div>
    {/if}
</section>

<style>
    .tabs {
        padding: 10px;
        margin: 10px;
    }

    .tabs__buttons {
        display: flex;
        align-items: center;
    }

    .tabs__info {
        display: flex;
    }
</style>