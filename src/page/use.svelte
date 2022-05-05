<script>
    import Header from '../components/header.svelte'
    import LongButton from '../components/longButton.svelte'
    import UseResult from '../components/result.svelte'
    import { link } from 'svelte-spa-router'
    import { BASE_URL } from "../api/urls";
    import axios from "axios";

$: state = 0;

    function changeState() {
        state = state + 1;
        console.log('changeState: ' + state)
    }

    let qr = '';
    let studentNumber = '';

    function getAmount() {
        const amountUrl = BASE_URL + 'gift-certificate/amount?qr=' + qr;
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(amountUrl);
                console.log(res);
                resolve(res.data);
            } catch (err) {
                console.log(err);
                reject(err.response.data);
            } finally {
            }
        })
    }

    function useIt() {
        const useUrl = BASE_URL + 'gift-certificate?qr=' + qr + '&student=' + studentNumber;
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(useUrl);
                resolve(res.data);
            } catch (err) {
                reject(err.response.data);
            } finally {
            }
        })
    }

    function getUser() {
        const getUserUrl = BASE_URL + 'gift-certificate/already?qr=' + qr;
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(getUserUrl);
                resolve(res.data);
            } catch (err) {
                reject(err.response.data);
            } finally {
            }
        })
    }

</script>

<Header
        title="사용"
        smallTitle="하기"
/>
<section class="container">
    {#if state === 0}
        <input class="qr" type="password" bind:value="{ qr }">

        {#if qr.length > 90 }
            <button on:click={() => changeState()}>
                <img src="images/next.png" alt="next">
            </button>
        {:else}
            <p class="qr--text">
                <span class="yellow">QR 코드</span>를 스캔해 주세요.
            </p>
        {/if}
    {/if}
    {#if state === 1}
        {#await getAmount()}

        {:then res}
            <p class="amount--text">
                <span class="yellow">{ res.amount } 원</span><br>
                사용하시겠습니까?
            </p>

            <div class="amount--buttons">
                <a on:click={() => changeState()}>
                    <LongButton
                            title="확인"
                            color="white"
                            backgroundColor="#F5C446"
                    />
                </a>
                <a use:link href="/">
                    <LongButton
                            title="취소"
                            color="black"
                            backgroundColor="#FFFFFF"
                    />
                </a>
            </div>
        {:catch err}
            <!-- rejected(거부) -->
            <p style="color: red;">{err.message}</p>
        {/await}
    {/if}
    {#if state === 2}
        <input class="studentNumber" type="text" bind:value="{ studentNumber }">

        {#if studentNumber.length === 4 }
            <button on:click={() => changeState()}>
                <img src="images/next.png" alt="next">
            </button>
        {:else}
            <p class="studentNumber--text">
                <span class="yellow">사용자 본인의 학번</span>을<br>
                입력해 주세요.
            </p>
        {/if}
    {/if}
    {#if state === 3}
        {#await useIt()}

        {:then res}
            <UseResult
                    result="O"
                    mainText="{ res.amount } 원"
                    text="사용되었습니다"
            />
        {:catch err}
            <UseResult
                    result="X"
                    mainText="이미 사용된"
                    text="상품권입니다"
            />
            {#await getUser()}

            {:then res}
                <p class="already--text">사용 시각: { res.usedDateTime }</p>
                <p class="already--text">사용자 학번: { res.studentNumber }</p>
            {/await}
        {/await}
    {/if}
</section>

<style>
    .qr, .studentNumber {
        margin-top: 7%;
        font-size: 100px;
        width: 88%;
        height: 124px;
        background: #FFFFFF;
        border: 6px solid rgba(245, 196, 70, 0.15);
        box-shadow: 0 10px 0 -2px #F5C446;
        border-radius: 62px;
        text-align: center;
    }
    input:focus {
        outline: none;
    }
    .qr--text, .studentNumber--text {
        font-weight: normal;
        font-size: 64px;
    }
    a, button {
        border: 0;
        outline: 0;
        background-color: white;
    }
    a:active > img, button:active > img {
        background-color: white;
        position: relative;
        top:2px;
    }
    .amount--text {
        font-weight: 300;
        font-size: 78px;
        line-height: 91px;

        text-align: left;
        margin: 0 0 2% 5%;
    }
    .amount--text > .yellow {
        font-weight: 700;
        font-size: 128px;
    }
    .amount--buttons {
        height: 100%;
        margin-top: 8%;
    }
    .already--text {
        margin: 0;
        color: #BFBFBF;
    }
</style>
