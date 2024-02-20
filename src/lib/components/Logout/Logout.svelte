<script lang="ts">
	export let isLogged = false;
</script>

{#if isLogged}
	<form action="/api/logout" method="post">
		<button>Logout</button>
	</form>
{/if}
