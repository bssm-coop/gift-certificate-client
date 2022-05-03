<script>
    import Header from '../components/header.svelte'
    import { link } from 'svelte-spa-router'
    import axios from 'axios'
    import { BASE_URL } from '../api/urls';

    let qr = '';

</script>

<Header
        title="사용"
        smallTitle="하기"
/>
<section class="container">
    <input class="qr" type="password" bind:value="{ qr }">

    {#if qr.length > 90 }
<!--        <button on:click={() => useIt()}>-->
        <a use:link href="/use/check?qr={ qr }">
            <img src="images/next.png" alt="next">
        </a>
    {:else}
        <p>
            <span class="yellow">QR 코드</span>를 스캔해 주세요.
        </p>
    {/if}
</section>

<style>
    .qr {
        margin-top: 7%;
        font-size: 100px;
        width: 88%;
        height: 124px;
        background: #FFFFFF;
        border: 6px solid rgba(245, 196, 70, 0.15);
        box-shadow: 0px 10px 0px -2px #F5C446;
        border-radius: 62px;
    }
    input:focus {
        outline: none;
    }
    p {
        font-weight: normal;
        font-size: 64px;
    }
    a {
        border: 0;
        outline: 0;
        background-color: white;
    }
    a:active > img {
        background-color: white;
        position: relative;
        top:2px;
    }
</style>
