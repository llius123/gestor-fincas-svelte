<script lang="ts">
	import { fetchPost } from '$lib';
	import type { User } from '$lib/server/db/schema';

	let username = '';
	let password = '';

	async function login() {
		const user = await fetchPost<User>({ url: '/api/login', body: { username, password } });
	}
</script>

<h1>Login</h1>

<form>
	<label for="username">username</label>
	<input bind:value={username} type="text" id="username" name="username" />
	<label for="password">Password</label>
	<input bind:value={password} type="password" id="password" name="password" />
	<button on:click={login}>Login</button>
</form>
