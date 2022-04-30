<script>
    export let title;
    export let description
</script>

<div class="main--button">
    <div>
    <h1>
        <span class="yellow">{ title }</span><br>
        하기
    </h1>
    <p>{ description }</p>
    </div>
</div>

<style>
    .main--button {
        display: flex;
        width: 465px;
        height: 70%;
        box-shadow: 0px 4px 30px 2px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 50px 0px;
    }
    h1 {
        margin: 0;
        font-weight: 600;
        font-size: 128px;
        line-height: 150px;
        text-align: center;
    }
    p {
        font-weight: 100;
        font-size: 24px;
        line-height: 28px;
    }

</style>
