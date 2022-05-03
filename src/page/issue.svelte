<script>
    import Header from '../components/header.svelte'
    import PriceButton from '../components/priceButton.svelte'
    import LongButton from '../components/longButton.svelte'
</script>

<Header
    title="발권"
    smallTitle="하기"
/>
<section class="container">
    <p class="issue--price-title">
        발권할 상품의 <span class="yellow">금액</span>을 입력해 주세요.
    </p>
    <div class="issue--price">
        <PriceButton
            price=1000
        />
        <PriceButton
            price=3000
        />
        <PriceButton
            price=5000
        />
    </div>
    <LongButton
        title="확인"
        color="white"
        backgroundColor="#F5C446"
    />
</section>


<style>
    p {
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
</style>
