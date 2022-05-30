<script>
    export let mainMessage;
    export let subMessage;
    export let showModal = false;
</script>
{#if showModal}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <img src="./images/X.png" alt="X">
            <p class="message--main">{mainMessage}</p>
            <p class="message--sub">{subMessage}</p>
        </div>
    </div>
{/if}
<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
    }
    .modal {
        padding: 5%;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }
    .message--main {
        font-weight: bold;
        font-size: 2em;
    }
    .message--sub {
        color: #999999;
    }
</style>
