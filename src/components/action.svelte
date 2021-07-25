<script>
    export let balance;
    export let showScreen;
    export let showWelcome;
    export let money;
    let main = true;
    let enterPin = false;
    let action = 0;
    let keyPad = "";

    const selectAct = (num) => () => {
        if (num == 1) {
            main = false;
            action = 1;
        } else if (num == 2) {
            main = false;
            action = 2;
        } else if (num == 3) {
            main = false;
            action = 3;
        } else if (num == 4) {
            showScreen = false;
            showWelcome = true;
        }
    };

    const select = (num) => () => {
        keyPad += num;
    };

    const clear = () => (keyPad = "");

    function addAmt() {
        balance += Number(keyPad);
        action = 1;
    }

    function removeAmt() {
        if (Number(keyPad) < balance) {
            balance -= Number(keyPad);
            action = 1;
            money = true;
        } else {
            window.alert("your balance is insufficient");
            action = 1;
        }
    }

    function goBack() {
        action = 0;
        main = true;
    }
</script>

<div class="atm-screen white-bg">
    {#if main}
        <h5>Press</h5>
        <h6>1. to check your balance</h6>
        <h6>2. to deposit money</h6>
        <h6>3. to remove money</h6>
        <h6>4. to close</h6>
    {/if}
    {#if action == 1 && !main}
        <h5>your current balance is {balance}</h5>
        <button on:click={goBack}>back</button>
    {/if}
    {#if action == 2 && !main}
        <h5>enter the amount you want to deposit</h5>
    {/if}
    {#if action == 3 && !main}
        <h5>enter the amount you want to remove</h5>
    {/if}
</div>
<div class="middle-sec">
    <div class="input-screen white-bg">
        {#if action == 2 || action == 3}
            {keyPad}
        {/if}
    </div>
    <div class="pad-container white-bg">
        {#if main}
            <button class="pad" on:click={selectAct(1)}>1</button>
            <button class="pad" on:click={selectAct(2)}>2</button>
            <button class="pad" on:click={selectAct(3)}>3</button>
            <button class="pad" on:click={selectAct(4)}>4</button>
        {/if}
        {#if !main}
            <button class="pad" on:click={select(1)}>1</button>
            <button class="pad" on:click={select(2)}>2</button>
            <button class="pad" on:click={select(3)}>3</button>
            <button class="pad" on:click={select(4)}>4</button>
            <button class="pad" on:click={select(5)}>5</button>
            <button class="pad" on:click={select(6)}>6</button>
            <button class="pad" on:click={select(7)}>7</button>
            <button class="pad" on:click={select(8)}>8</button>
            <button class="pad" on:click={select(9)}>9</button>
            <button class="pad" on:click={select(0)}>0</button>
            <button class="pad" disabled={!keyPad} on:click={clear}>R</button>
            {#if action == 2}
                <button class="pad" disabled={!keyPad} on:click={addAmt}
                    >ENT</button
                >
            {/if}
            {#if action == 3}
                <button class="pad" disabled={!keyPad} on:click={removeAmt}
                    >ENT</button
                >
            {/if}
        {/if}
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
