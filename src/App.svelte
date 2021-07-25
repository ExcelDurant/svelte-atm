<script>
	import { fade, fly } from "svelte/transition";

	let account = {
		pin: "",
		name: "",
		id: "",
		balance: 0,
	};

	let showWelcome = true;
	let showEnterCrd = false;
	let showRegister = false;
	let showAction = false;
	let money = false;
	let card = true;
	let showLoader = false;

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
					bind:showLoader
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
					bind:account
					bind:card
					bind:showScreen={showEnterCrd}
					bind:showAction
					bind:showLoader
				/>
			{/if}
			{#if showAction}
				<Action
					bind:account
					bind:money
					bind:showScreen={showAction}
					bind:showWelcome
					bind:showLoader
				/>
			{/if}

			{#if showLoader}
				<div class="donutSpinner" />
			{/if}
			<div class="bottom-sec">
				<div class="money-slot">
					{#if money}
						<div in:fade class="money" />
					{/if}
				</div>
				<div class="card-slot">
					{#if card}
						<div
							transition:fly={{ y: -50, duration: 1000 }}
							class="card"
						/>
					{/if}
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.page {
		width: 100%;
		min-height: 100vh;
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

	.donutSpinner {
		display: inline-block;
		border: 7px solid hsl(222 100% 95%);
		border-left-color: hsl(243 80% 62%);
		border-radius: 50%;
		width: 80px;
		height: 80px;
		animation: donut-spin 1.2s linear infinite;
	}

	@keyframes donut-spin {
		to {
			transform: rotate(1turn);
		}
	}
</style>
