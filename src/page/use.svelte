<script>
    import Header from '../components/header.svelte'
    import axios from 'axios'
    import { BASE_URL } from '../api/urls';

    let qr = '';

    function useIt() {
        axios({
            method: 'PUT',
            url: BASE_URL + 'gift-certificate',
            data: {
                'code': { qr }
            }
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }
</script>

<Header
        title="사용"
        smallTitle="하기"
/>
<section class="container">
    <input class="qr" type="password" bind:value="{ qr }">

    {#if qr.length === 163 }
        <button on:click={() => useIt()}>
            <img src="images/next.png" alt="next">
        </button>
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
        width: 80%;
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
    button {
        border: 0;
        outline: 0;
        background-color: white;
    }
    button:active > img {
        background-color: white;
        position: relative;
        top:2px;
    }
</style>
