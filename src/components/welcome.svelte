<script>
    export let showScreen;
    export let showRegister;
    export let showEnterCrd;

    const select = (num) => () => {
        if (num == 1) {
            showEnterCrd = true;
            showScreen = false;
        } else if (num == 2) {
            showScreen = false;
            showRegister = true;
        } else {
            window.alert("wrong number chosen");
        }
    };
</script>

<div class="atm-screen white-bg">
    <h4>Welcome</h4>
    <h5>Press</h5>
    <h6>1. to enter your card</h6>
    <h6>2. to register a new card</h6>
</div>
<div class="middle-sec">
    <div class="input-screen white-bg" />
    <div class="pad-container white-bg">
        <button class="pad" on:click={select(1)}>1</button>
        <button class="pad" on:click={select(2)}>2</button>
    </div>
</div>

<style>
    .atm-screen {
        width: 90%;
        height: 150px;
        border: 4px solid crimson;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-transform: uppercase;
        justify-content: space-around;
        font-size: 25px;
    }

    .middle-sec {
        width: 90%;
        display: flex;
        justify-content: space-between;
    }

    .input-screen {
        width: 40%;
        height: 40px;
        border: 2px solid crimson;
    }

    .pad-container {
        width: 50%;
        height: 200px;
        border: 2px solid crimson;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .pad {
        min-width: 50px;
        height: 30px;
        color: white;
        font-weight: 600;
        background-color: rgb(238, 34, 68);
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        border-radius: 5px;
        cursor: pointer;
    }
    .pad:hover {
        color: purple;
    }
</style>
