<script>
    import Header from '../components/header.svelte'
    import LongButton from '../components/longButton.svelte'
    import { link } from 'svelte-spa-router'
    import axios from "axios";
    import {BASE_URL} from "../api/urls";

    const currentUrl = window.location.hash;
    const qr = currentUrl.substring(currentUrl.indexOf('=')+1);

    const url = BASE_URL + 'gift-certificate/amount?qr=' + qr;

    function getAmount() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                console.log(res);
                resolve(res.data);
            } catch (err) {
                console.log(err);
                reject(err.response.data);
            } finally {
            }
        })
    }

</script>

{#await getAmount()}

{:then res}
    <!-- fulfilled(이행) -->

    <Header
            title="사용"
            smallTitle="하기"
    />

    <section class="container">
        <p>
            <span class="yellow">{ res.amount } 원</span><br>
            사용하시겠습니까?
        </p>

        <div class="buttons">
            <a use:link href="/use/check/use?qr={ qr }">
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
    </section>
{:catch err}
    <!-- rejected(거부) -->
    <p style="color: red;">{err.message}</p>
{/await}


<style>
    p {
        font-weight: 300;
        font-size: 78px;
        line-height: 91px;

        text-align: left;
        margin: 0 0 2% 5%;
    }
    .yellow {
        font-weight: 700;
        font-size: 128px;
    }
    .buttons {
        height: 100%;
        margin-top: 8%;
    }
</style>

