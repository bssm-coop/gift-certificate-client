<script>
    export let result;
    export let mainText;
    export let text;
</script>

<img src="images/{result}.png" alt="{result}">
<div class="text">
    <p class="yellow">
        { mainText }
    </p>
    <p>{ text }</p>
</div>

<style>
    img {
        margin-top: 5%;
    }
    .text {
        margin-top: 2%;
    }
    .yellow {
        font-weight: bold;
        font-size: 84px;
    }
    p {
        margin: 0;
        font-weight: normal;
        font-size: 64px;
    }
</style>
