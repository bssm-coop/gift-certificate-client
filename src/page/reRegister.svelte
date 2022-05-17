<script>
    import Header from '../components/header.svelte';
    import { BASE_URL } from "../api/urls";
    import axios from "axios";
    import Modal from "../Modal.svelte";
    import ReRegisterResult from '../components/result.svelte'

$: state = 0;
    let number = 0;

    function changeState() {
        state = state + 1;
    }

    function addNumber() {
        number = number + 1;
    }

$: qr = '';

    let showModal = false;
    let reIssuer = '';
    let qrs = [];
    let mainMessage = '';
    let subMessage = '';

    function addQr() {
        const getIsNotUsedValidationUrl = BASE_URL + 'gift-certificate/re-validate?qr=' + qr;

        axios.get(getIsNotUsedValidationUrl).then(res => {
            if (qrs.includes(qr)) {
                mainMessage = "이미 입력한 상품권입니다.";
                subMessage = "그렇습니다.";
                toggleModal();
                qr='';
                return;
            }
            qrs.push(qr);
            qr = '';
            addNumber();
        }).catch(err => {
            mainMessage = err.response.data.message;
            toggleModal();
            qr = '';
        })
    }

    const toggleModal = () => {
        showModal = !showModal;
    }

    function reRegisterIt() {
        const reRegisterUrl = BASE_URL + 'gift-certificate/re-register';
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(reRegisterUrl, {
                    'codes': qrs,
                    'issuer': reIssuer,
                });
                resolve(res);
            } catch (err) {
                reject(err.response.data);
            } finally {
            }
        })
    }
</script>

<Modal
    mainMessage="{mainMessage}"
    subMessage="{subMessage}"
    {showModal}
    on:click={toggleModal}
/>

<Header
    title="재등록"
    smallTitle="하기"
/>

<section class="container">
    {#if state === 0}
        <p class="number--text">{number} 개 입력되었습니다.</p>
        <input class="qr" type="password" bind:value="{ qr }" on:keyup={e => e.key === 'Enter' && addQr()}>

        <button on:click={() => changeState()}>
            <img src="images/next.png" alt="next">
        </button>
    {/if}
    {#if state === 1}
        <input class="re-issuer" type="text" bind:value="{ reIssuer }">

        {#if reIssuer.length > 0 }
            <button on:click={() => changeState()}>
                <img src="images/next.png" alt="next">
            </button>
        {:else}
        <p class="re-issuer--text">
            재등록 하는 <span class="yellow">재등록 요청자</span>를<br>
            입력해 주세요.
        </p>
        {/if}
    {/if}
    {#if state === 2}
        {#await reRegisterIt()}
            <p>loading...</p>
        {:then res}
            <ReRegisterResult
                result="O"
                mainText="{qrs.length} 개의 상품권"
                text="재등록되었습니다."
            />
        {:catch err}
            <p>{err.message}</p>
        {/await}
    {/if}
</section>

<style>
    .qr, .re-issuer{
        margin-top: 2%;
        font-size: 100px;
        width: 88%;
        height: 124px;
        background: #FFFFFF;
        border: 6px solid rgba(245, 196, 70, 0.15);
        box-shadow: 0 10px 0 -2px #F5C446;
        border-radius: 62px;
        text-align: center;
    }
    .number--text {
        color: #999999;
        margin: 0;
    }
    input:focus {
        outline: none;
    }
    .re-issuer--text {
        font-weight: normal;
        font-size: 64px;
    }
    a, button {
        border: 0;
        outline: 0;
        background-color: white;
    }
    button:active > img {
        background-color: white;
        position: relative;
        top:2px;
    }
    .amount--text > .yellow {
        font-weight: 700;
        font-size: 128px;
    }

</style>
