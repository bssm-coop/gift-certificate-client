<script>
    import Header from '../components/header.svelte'
    import { link } from 'svelte-spa-router'

    let studentNumber = '';

</script>

<Header
        title="사용"
        smallTitle="하기"
/>
<section class="container">
    <input class="studentNumber" type="text" bind:value="{ studentNumber }">

    {#if studentNumber.length === 4 }
<!--        <a use:link href="/use/check?qr={ qr }">-->
            <img src="images/next.png" alt="next">
<!--        </a>-->
    {:else}
        <p>
            <span class="yellow">사용자 본인의 학번</span>을<br>
            입력해 주세요.
        </p>
    {/if}
</section>

<style>
    .studentNumber {
        margin-top: 7%;
        font-size: 100px;
        width: 88%;
        height: 124px;
        background: #FFFFFF;
        border: 6px solid rgba(245, 196, 70, 0.15);
        box-shadow: 0px 10px 0px -2px #F5C446;
        border-radius: 62px;
        text-align: center;
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
