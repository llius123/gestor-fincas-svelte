<script lang="ts">
	import Logout from '$lib/components/Logout/Logout.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<a href="/">Home</a>
<a href="/login">Login</a>

<Logout isLogged={data.isUserLogged} />

<slot />
