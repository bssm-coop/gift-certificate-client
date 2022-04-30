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
            description="매점 상품권을 발권할 수 있습니다."
    />
    <MainButton
            title = "사용"
            description="매점 상품권을 사용할 수 있습니다."
    />
</section>

<style>
    .main--button-list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 83px;
        margin-top: 4%;
    }
</style>
