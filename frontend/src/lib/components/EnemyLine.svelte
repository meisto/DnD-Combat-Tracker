<script lang="ts">
	import type { Enemy, EnemyInstance } from '$lib/types/enemy';

	import FancyBox from '$lib/components/FancyBox.svelte';

	export let character: EnemyInstance;
	export let baseEnemy: Enemy | null | undefined;

	let barWidth: number = 100;
	let barStyle: string = 'width: 100%; background: red';
	$: {
		if (baseEnemy != null) {
			barWidth = Math.round((character.current_hit_points / baseEnemy.max_hit_points) * 100);
		} else {
			barWidth = 0;
		}

		let color = 'green';
		if (barWidth < 0.6 * 100) color = 'yellow';
		if (barWidth < 0.3 * 100) color = 'red';

		console.log('Bar Width: ', barWidth);

		barStyle = `width: ${barWidth.toString()}%; background: ${color}`;
	}
</script>

{#if character}
	<div class={(barWidth <= 0 ? 'opacity-5 ' : '') + 'h-full w-full'}>
		<FancyBox>
			<div class="flex h-20 w-[450px] flex-row flex-nowrap items-center justify-center gap-1 px-4">
				<div class="flex flex-col gap-0">
					<span class="w-40 text-left font-Rakkas text-xl font-semibold leading-5 drop-shadow-2xl">
						{character.name}
					</span>
				</div>
				<div class="relative mx-2 flex flex-col">
					<div class="flex flex-row justify-between">
						<span class="italic text-grainbrown/20">♥HP</span>
						<div>
							<span class="font-bold text-grainbrown">{character.current_hit_points}</span>
							<span class="inline">/</span>
							{#if baseEnemy != null}
								<span class="inline text-grainbrown/20">{baseEnemy.max_hit_points}</span>
							{:else}
								<span class="inline text-grainbrown/20">{'?'}</span>
							{/if}
						</div>
					</div>
					<div class="h-2 w-32 border border-black border-opacity-10 bg-black/30">
						<div style={barStyle} class="h-full transition-all ease-in-out"></div>
					</div>
				</div>
				<div class="relative rounded-sm">
					{#if baseEnemy != null}
						<div class="p-2 text-center text-2xl">{baseEnemy.armor_class}</div>
					{:else}
						<div class="p-2 text-center text-2xl">"?"</div>
					{/if}
					<span class="absolute -bottom-1 left-0 w-full text-center text-xs font-extrabold">AC</span
					>
				</div>
				<div class="relative rounded-sm">
					<div class="p-2 text-center text-2xl">?</div>
					<span class="absolute -bottom-1 left-0 w-full text-center text-xs font-extrabold">PP</span
					>
				</div>
			</div>
		</FancyBox>
	</div>
{/if}
