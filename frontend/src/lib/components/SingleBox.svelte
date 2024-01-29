<!--
======================================================================
Author: meisto
Creation Date: Wed 10 Jan 2024 09:49:12 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	export let title: string;
</script>

<div
	class="grow overflow-hidden rounded-lg border border-grainbrown shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
>
	<div
		class="w-full rounded-t-lg bg-tundora px-4 py-2 font-SpectralSC text-xl font-bold text-grainbrown"
	>
		{title}
	</div>
	<div
		class="bg-[#fffef0] font-CrimsonText text-englishwalnut shadow-[2px_3px_20px_black,_0_0_60px_#8a4d0f_inset;]"
	>
		<slot />
	</div>
</div>

<!-- Filter -->
<!-- Source: stackoverflow.com/questions/14585101/old-paper-background-texture-with-just-css -->
<!--
<svg>
   <filter id="wavya2">
      <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale="20" />
   </filter>
</svg>
-->
