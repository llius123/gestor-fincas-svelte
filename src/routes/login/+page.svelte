<script lang="ts">
	let username = '';
	let password = '';

	export let form;
</script>

<h1>Login</h1>

<form method="POST">
	<label for="username">username</label>
	<input bind:value={username} type="text" id="username" name="username" />
	<label for="password">Password</label>
	<input bind:value={password} type="password" id="password" name="password" />
	<button>Login</button>
</form>
{#if form?.error}
	<p>Error</p>
{/if}
