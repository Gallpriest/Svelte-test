<script>
    let classNames = 'btn-default';
    export let name = 'No name';
    export let styles = '';
    export let handlerCallback;

    classNames += ` ${styles}`;
</script>

<button
    on:click={handlerCallback}
    class="{classNames}" 
    type="button"
>
    {name}
</button>

<style>
    .btn-default {
        cursor: pointer;
        font-size: 14px;
        letter-spacing: 1px;
        background-color: #f0932b;
        border: 1px solid #f0932b;
        color: #fff;
        transition: all 0.15s ease-in;
        display: inline-flex;
        align-items: center;
        height: 38px;
        padding: 0 10px;
    }

    .btn-default_dark {
        background-color: #130f40;
        border: 1px solid #130f40;
    }

    .btn-default:hover {
        background-color: #fff;
        color: #f0932b;
    }

    .btn-default_dark:hover {
        background-color: #fff;
        color: #130f40;
    }
</style>