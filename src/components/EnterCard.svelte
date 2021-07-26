<script>
    import { db } from "./../firebase";
    export let showScreen;
    export let showAction;
    export let card;
    export let account;
    export let showLoader;

    let inId;
    let showPin = false;
    let showId = true;
    let keyPad = "";

    function enterId() {
        showLoader = true;
        card = false;
        db.collection("accounts")
            .doc(inId)
            .get()
            .then((doc) => {
                showLoader = false;
                if (doc.exists) {
                    showId = false;
                    showPin = true;
                    account = doc.data();
                } else {
                    window.alert("wrong card entered");
                    card = true;
                }
            });
    }

    const select = (num) => () => {
        keyPad += num;
    };

    const clear = () => (keyPad = "");

    function submitPin() {
        if (keyPad == account.pin) {
            showScreen = false;
            showAction = true;
        } else {
            window.alert("wrong credentials");
        }
    }
</script>

<div class="atm-screen white-bg">
    {#if showId}
        <h3>
            enter your card(i.e you should type in your card ID you received on
            registeration)
        </h3>
        <input
            type="text"
            name="id"
            id="id"
            class="card-in"
            placeholder="EX: AchfahfjHI0JKK"
            bind:value={inId}
        />
        <button class="submit-btn" on:click={enterId}>submit</button>
    {/if}
    {#if showPin}
        <h3>welcome {account.name}</h3>
        <h3>please enter your pin to continue</h3>
    {/if}
</div>
<div class="middle-sec">
    <div class="input-screen white-bg">
        {#if showPin}
            {keyPad}
        {/if}
    </div>
    <div class="pad-container white-bg">
        {#if showPin}
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
            <button class="pad" on:click={submitPin}>ENT</button>
        {/if}
    </div>
</div>

<style>
    h3 {
        font-size: 16px;
    }

    .card-in {
        height: 30px;
        font-size: 18px;
        padding-left: 5px;
    }

    .submit-btn {
        padding: 0;
    }

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
        display: flex;
        justify-content: center;
        align-items: center;
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
        font-size: 20px;
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
