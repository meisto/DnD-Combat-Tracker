<script>
	import '../app.css';

	import Menu from '$lib/components/Menu.svelte';

	import { popupsStore } from '$lib/stores/popups';
</script>

<!-- Popup Window -->
{#if $popupsStore[0]}
	<div
		class="fixed z-10 flex h-full w-full items-center justify-center bg-black/5 transition-opacity"
	>
		<div class="backdrop-opacity-10">
			<div class="col-start-1 row-start-1 h-full w-full p-6">
				<Menu />
			</div>
		</div>
	</div>
{/if}

<!--
<div class="p-2 w-full flex flex-row bg-black text-red-500 items-center justify-between px-8">
	<a href="/" class="font-bold p-2 rounded-full w-8 h-8 bg-gray-500">H</a>

	<div class="flex flex-row gap-4">
		<a href="/">Test</a>
	</div>
</div>
-->
<!-- Fonts: font-EBGaramond, font-Tinos -->
<div
	class="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#765827] to-black"
>
	<slot />
</div>
