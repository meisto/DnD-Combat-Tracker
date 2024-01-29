<!--
======================================================================
Author: meisto
Creation Date: Thu 04 Jan 2024 10:48:08 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	export let grow: boolean = false;
</script>

<div
	class={'fancybox  overflow-hidden rounded-sm bg-black text-grainbrown shadow-[rgba(0,0,0,0.5)_0px_9px_20px] ' +
		(grow ? 'h-full w-full' : '')}
>
	<div
		class={'fancybox-inner relative overflow-hidden rounded-sm bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-gray-900 ' +
			(grow ? 'h-full w-full' : '')}
	>
		<slot />
		<div
			class="absolute left-0 top-0 h-[14px] w-[14px] rounded-br-md border-b-2 border-r-2 border-[#b78846] text-[14px] leading-[12px] text-[#b78846]"
		>
			•
		</div>
		<div
			class="absolute right-0 top-0 h-[14px] w-[14px] rounded-bl-md border-b-2 border-l-2 border-[#b78846] text-[14px] leading-[12px] text-[#b78846]"
		>
			•
		</div>
		<div
			class="absolute bottom-0 left-0 h-[14px] w-[14px] rounded-tr-md border-r-2 border-t-2 border-[#b78846] text-[14px] leading-[12px] text-[#b78846]"
		>
			•
		</div>
		<div
			class="absolute bottom-0 right-0 h-[14px] w-[14px] rounded-tl-md border-l-2 border-t-2 border-[#b78846] text-[14px] leading-[12px] text-[#b78846]"
		>
			•
		</div>
	</div>
</div>

<style>
	.test:before,
	.test:after {
		content: '•';
		position: absolute;
		width: 14px;
		height: 14px;
		font-size: 14px;
		color: #b78846;
		border: 2px solid #b78846;
		line-height: 12px;
		text-align: center;
	}

	.fancybox {
		position: relative;
		padding: 5px;
		border: 2px solid #b78846;
	}
	.fancybox-inner {
		position: relative;
		border: 2px solid #b78846;
	}

	/* Place border squares. */
	.fancybox:before,
	.fancybox:after {
		top: 5px;
	}
	.fancybox-inner:before,
	.fancybox-inner:after {
		bottom: -2px;
	}

	.fancybox:before {
		left: 5px;
	}
	.fancybox:after {
		right: 5px;
	}
	.fancybox-inner:before {
		left: -2px;
	}
	.fancybox-inner:after {
		right: -2px;
	}
</style>
