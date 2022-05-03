<script>
    import UseResult from '../components/useResult.svelte'
    import axios from "axios";
    import { BASE_URL } from "../api/urls";

    const currentUrl = window.location.hash;
    const qr = currentUrl.substring(currentUrl.indexOf('=')+1);

    const url = BASE_URL + 'gift-certificate?qr=' + qr;

    function useIt() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url);
                resolve(res.data);
            } catch (err) {
                reject(err.response.data);
            } finally {
            }
        })
    }
</script>

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
{/await}
