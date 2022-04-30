<script>
    import Header from '../components/header.svelte'
    import PriceButton from '../components/priceButton.svelte'
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
    <button class="issue--price-submit">확인</button>
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
    }
    .issue--price-submit {
        color: white;
        margin-top: 3%;
        width: 83%;
        height: 9%;
        font-weight: 500;
        font-size: 1.5em;
        background: #F5C446;
        box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
    }
    .issue--price-submit:focus {
        border: none;
    }
    .issue--price-submit:active {
        background-color: #F5C446;
        box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.5);
        position: relative;
        top:2px;
    }
</style>
