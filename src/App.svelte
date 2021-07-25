<script>
	import { fade,fly } from 'svelte/transition';

	let account = {
		pin: "1234",
		name: "Excel",
		id: "fireforce",
		balance: 0,
	};

	let showWelcome = true;
	let showEnterCrd = false;
	let showRegister = false;
	let showAction = false;
	let money = false;
	let card = true;

	import Welcome from "./components/welcome.svelte";
	import EnterCard from "./components/EnterCard.svelte";
	import Action from "./components/action.svelte";
	import Register from "./components/register.svelte";
</script>

<main>
	<div class="page">
		<div class="atm">
			{#if showRegister}
				<Register
					bind:name={account.name}
					bind:keyPad={account.pin}
					bind:backToHome={showWelcome}
					bind:showScreen={showRegister}
				/>
			{/if}
			{#if showWelcome}
				<Welcome
					bind:showScreen={showWelcome}
					bind:showRegister
					bind:showEnterCrd
				/>
			{/if}
			{#if showEnterCrd}
				<EnterCard
					bind:id={account.id}
					bind:pin={account.pin}
					bind:card
					bind:showScreen={showEnterCrd}
					bind:showAction
				/>
			{/if}
			{#if showAction}
				<Action
					bind:balance={account.balance}
					bind:money
					bind:showScreen={showAction}
					bind:showWelcome
				/>
			{/if}

			<div class="bottom-sec">
				<div class="money-slot">
					{#if money}
						<div in:fade class="money" />
					{/if}
				</div>
				<div class="card-slot">
					{#if card}
						<div transition:fly="{{ y: -50, duration: 1000 }}" class="card" />
					{/if}
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.page {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.atm {
		width: 400px;
		height: 600px;
		border: 5px solid crimson;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: rgb(173, 172, 172);
	}

	.bottom-sec {
		width: 90%;
		display: flex;
		justify-content: space-between;
	}

	.money-slot {
		width: 68%;
		height: 15px;
		border: 5px solid crimson;
		background-color: gray;
		position: relative;
	}

	.card-slot {
		width: 29%;
		height: 15px;
		border: 5px solid crimson;
		background-color: gray;
		position: relative;
	}

	.money {
		position: absolute;
		width: 98%;
		height: 120px;
		background-color: greenyellow;
		top: -10%;
	}

	.card {
		position: absolute;
		width: 90%;
		height: 100px;
		background-color: blueviolet;
		top: -10%;
	}
</style>
