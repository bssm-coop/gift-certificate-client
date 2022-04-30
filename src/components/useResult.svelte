<script>
    import Header from './header.svelte'

    export let result;
    export let mainText;
    export let text;
</script>

<Header
    title="사용"
    smallTitle="하기"
/>
<section class="container">
    <img src="images/{result}.png" alt="{result}">
    <div class="text">
        <p class="yellow">
            { mainText }
        </p>
        <p>{ text }</p>
    </div>
</section>

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
