<script>
    import Header from '../components/header.svelte';
    import LongButton from '../components/longButton.svelte'
    import IssueResult from '../components/result.svelte'
    import { BASE_URL } from "../api/urls";
    import axios from "axios";

$: state = 0;

    function changeState() {
        state = state + 1;
        console.log('changeState: ' + state)
    }

    let price;
    let issuer;
    let number = 0;
    let numbers = [100, 50, 10, 5, 1];
    let prices = [500, 1000, 3000, 5000];

    function addValue(n) {
        number = number + n;
    }

    function createThem() {
        const createUrl = BASE_URL + 'gift-certificate';
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(createUrl, {
                    'amount': price,
                    'issuer': issuer,
                    'number': number
                });
                resolve(res);
            } catch (err) {
                reject(err.response.data);
            } finally {

            }
        })
    }

</script>

<Header
    title="발권"
    smallTitle="하기"
/>
<section class="container">
    {#if state === 0}
        <p class="issue--title">
            발권할 상품의 <span class="yellow">금액</span>을 입력해 주세요.
        </p>
        <div class="issue--price">
            {#each prices as p}
                <label class="price--label">
                    <input type="radio" bind:group={ price } name="price" value="{ p }">
                    <span class="price--text">{ p }</span>
                </label>
            {/each}
        </div>

        <a on:click={() => changeState()}>
            <LongButton
                title="확인"
                color="white"
                backgroundColor="#F5C446"
            />
        </a>
    {/if}
    {#if state === 1}
        <p class="issue--title">
            발권할 상품권의 <span class="yellow">개수</span>를 입력해 주세요.
        </p>
        <input class="number--input" type="number" bind:value={ number } />

        <div class="plus">
            {#each numbers as n}
                <button class="plus--button" on:click={() => addValue(n)}>
                    + { n }
                </button>
            {/each}
        </div>

        <a on:click={() => changeState()}>
            <LongButton
                    title="확인"
                    color="white"
                    backgroundColor="#F5C446"
            />
        </a>
    {/if}
    {#if state === 2}
        <p class="issue--title">
            상품권을 발권하는 <span class="yellow">발권 요청자</span>를 입력해 주세요.
        </p>
        <input class="issuer--input" type="text" bind:value={ issuer } />

        <a on:click={() => changeState()}>
            <LongButton
                    title="확인"
                    color="white"
                    backgroundColor="#F5C446"
            />
        </a>
    {/if}
    {#if state === 3}
        {#await createThem()}
            <p>loading...</p>
        {:then res}
            <IssueResult
                result="O"
                mainText="{ price } 원권 { number } 개"
                text="발권되었습니다"
            />
        {:catch err}
            <IssueResult
                result="X"
                mainText="{ err.status }"
                text="{ err.message }"
            />
        {/await}
    {/if}
</section>


<style>
    .issue--title {
        margin-left: 8%;
        margin-bottom: 5%;
        font-weight: normal;
        font-size: 36px;
        line-height: 42px;
        text-align: left;
    }
    .issue--price {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-bottom: 2%;
    }
    .price--label {
        width: 240px;
        height: 240px;
    }
    .price--text {
        font-weight: 700;
        font-size: 3.3em;
        line-height: 75px;
        color: #F5C446;
    }
    .price--label input[type="radio"] {
        display: none;
    }
    .price--label input[type="radio"] + span {
        display: inline-block;
        padding: 27% 17%;
        border: 2px solid #F5C446;
        box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        background-color: #ffffff;
        text-align: center;
        cursor: pointer;
    }
    .price--label input[type="radio"]:checked + span {
        background-color: #FEF6E3;
    }
    .issuer--input {
        border: 0;
        border-bottom: 6px solid #F5C446;
        width: 80%;
        font-weight: 700;
        font-size: 64px;
        line-height: 75px;
        text-align: center;
        margin-bottom: 12%;
    }
    .number--input {
        width: 100%;
        height: 200px;
        font-weight: 700;
        font-size: 220px;
        line-height: 258px;
        color: #F5C446;
        text-align: center;
        margin: 0 0 3% 0;
        padding: 0;
        border: none;
    }
    input[type="number"]::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    input:focus {
        outline: none;
    }
    .plus {
        display: flex;
        flex-wrap: wrap;
        gap: 22px;
        justify-content: center;
    }
    .plus--button {
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        width: 110px;
        height: 45px;
        border: 1px solid #F5C446;
        border-radius: 16px;
        background: #FFFFFF;
        margin: 0 0 2% 0;
    }
    .plus--button:active {
        position: relative;
        top: 2px;
    }
</style>
