<script>
    import Header from '../components/header.svelte'
    import MainButton from '../components/mainButton.svelte'
</script>

<Header
        title="상품권"
        smallTitle="관리"
/>
<section class="main--button-list">
    <MainButton
            title = "발권"
            description = "매점 상품권을 발권할 수 있습니다."
            linkTo = "/issue"
    />
    <MainButton
            title = "사용"
            description = "매점 상품권을 사용할 수 있습니다."
            linkTo = "/use"
    />
    <MainButton
        title = "재등록"
        description = "사용한 상품권을 재등록 할 수 있습니다."
        linkTo = "/re-register"
    />
</section>

<style>
    .main--button-list {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: nowrap;
    }
</style>
