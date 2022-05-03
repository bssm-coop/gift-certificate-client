<script>
    export let title;
    export let color;
    export let backgroundColor;
</script>

<button class="long-button" style="color: { color }; background: { backgroundColor }">{ title }</button>

<style>
    .long-button {
        margin-top: 1%;
        width: 83%;
        height: 9%;
        font-weight: 500;
        font-size: 1.5em;
        border: none;
        box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
    }
    .long-button:focus {
        border: none;
    }
    .long-button:active {
        background-color: transparent;
        box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.5);
        position: relative;
        top:2px;
    }
</style>
