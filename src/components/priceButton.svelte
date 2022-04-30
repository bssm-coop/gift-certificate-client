<script>
    export let price;
</script>
<label class="price">
    <input type="radio" name="price" value={price}>
    <span>{ price }</span>
</label>


<style>
    label {
        width: 240px;
        height: 240px;
    }
    span {
        font-weight: 700;
        font-size: 3.3em;
        line-height: 75px;
        color: #F5C446;
    }
    .price input[type="radio"] {
        display: none;
    }
    .price input[type="radio"] + span {
        display: inline-block;
        padding: 27% 17%;
        border: 2px solid #F5C446;
        box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        background-color: #ffffff;
        text-align: center;
        cursor: pointer;
    }

    .price input[type="radio"]:checked + span {
        background-color: #FEF6E3;
    }
</style>
