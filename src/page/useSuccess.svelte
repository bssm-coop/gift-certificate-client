<script>
    import UseResult from '../components/userResult.svelte'

    export let price;
</script>

<UseResult
        result="O"
        mainText="{ price } 원"
        text="사용되었습니다"
/>
