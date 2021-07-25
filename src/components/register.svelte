<script>
    import { db } from "./../firebase";
    export let showScreen;
    export let backToHome = false;
    export let showLoader;
    let name;
    let keyPad = "";
    let id;
    let showName = true;
    let showPin = false;
    let submitted = false;

    const select = (num) => () => {
        keyPad += num;
    };
    const clear = () => (keyPad = "");

    function submitName() {
        showLoader = true;
        db.collection("accounts")
            .add({})
            .then((doc) => {
                showName = false;
                showPin = true;
                showLoader = false;
                id = doc.id;
            });
    }
    function submitPin() {
        showLoader = true;
        db.collection("accounts")
            .doc(id)
            .set({
                id: id,
                name: name,
                pin: keyPad,
                balance: 0,
            })
            .then(() => {
                showPin = false;
                submitted = true;
                showLoader = false;
            });
    }

    function handleClick() {
        backToHome = true;
        showScreen = false;
    }
</script>

<div class="atm-screen white-bg">
    {#if showName}
        <h3>please enter your name</h3>
        <input
            type="text"
            name="name"
            id="id"
            class="name-in"
            placeholder="EX: Excel"
            bind:value={name}
        />
        <button class="submit-btn" disabled={!name} on:click={submitName}
            >submit</button
        >
    {/if}
    {#if showPin}
        <h3>please enter your pin</h3>
    {/if}
    {#if submitted}
        <h4>
            your account has been successfully created. Your ID is {id}. Please
            do not lose it. You'll need it to make transactions
        </h4>
        <h5>your balance is 0</h5>
        <button on:click={handleClick}>back to home</button>
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
            <button class="pad" disabled={!keyPad} on:click={submitPin}
                >ENT</button
            >
        {/if}
    </div>
</div>

<style>
    .name-in {
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
        font-size: 17px;
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
