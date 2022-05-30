<script>
    import { link } from 'svelte-spa-router'

    export let title;
    export let smallTitle;
</script>

<header>
    <a use:link href="/">
        <img src="images/logo.png" alt="logo">
    </a>
    <span class="yellow header--title">{ title }</span>
    <span class="header--small-title">{ smallTitle }</span>
</header>

<style>
    header {
        text-align: center;
        margin-top: 3%;
        margin-bottom: 2%;
    }
    img {
        margin-right: 15px;
    }
    .header--title {
        font-weight: 600;
        font-size: 50px;
        line-height: 59px;
    }
    .header--small-title {
        font-weight: 400;
        font-size: 40px;
        line-height: 47px;
    }
</style>
