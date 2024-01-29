<!--
======================================================================
Author: meisto
Creation Date: Wed 17 Jan 2024 04:43:27 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	type Point = { x: number; y: number };
	type PolarPoint = { angle: number; dist: number };

	const center = { x: 200, y: 200 };
	const radius = 100;

	const getCoords = (angle: number, dist: number, basePoint: Point = center) => {
		angle = angle % 360;

		const modifier = angle > 180 ? -1 : 1;
		if (modifier == -1) angle -= 180;

		const dx = Math.round(Math.sin((angle / 180) * Math.PI) * dist);
		const dy = Math.round(Math.sqrt(dist ** 2 - dx ** 2));

		const x = angle > 90 ? basePoint.x + modifier * dx : basePoint.x + modifier * dx;
		const y = angle > 90 ? basePoint.y + modifier * dy : basePoint.y - modifier * dy;
		return { x: x, y: y };
	};

	const pointsToStr = (points: Array<Point>) => {
		return points.map((point) => `${point.x}, ${point.y}`).join(' ');
	};

	const toPolar = (point: Point, basePoint: Point = center): PolarPoint => {
		const dist = Math.sqrt((point.x - basePoint.x) ** 2 + (point.y - basePoint.y) ** 2);
		const modifier = point.x < basePoint.x ? -1 : 1;

		point = { ...point };
		if (modifier == -1) point.x = basePoint.x + (basePoint.x - point.x);

		const dx = basePoint.x - point.x;
		const dy = basePoint.y - point.y;
		const deg = (Math.atan(dx / dy) / (2 * Math.PI)) * 360;
		return { angle: modifier == 1 ? 360 - deg : deg, dist: dist };
	};

	const outerPoints = pointsToStr(
		[0, 60, 120, 180, 240, 300, 0].map((x) => getCoords(x, radius - 2))
	);
	const innerPoints = pointsToStr([0, 120, 240, 360].map((x) => getCoords(x, radius - 2)));
	const elementalCircles = [0, 1, 2, 3, 4].map((x) => x * 72).map((x) => getCoords(x, 126));

	console.log(outerPoints);

	let jera: Array<Array<Point>> = [
		[
			{ x: 0, y: 0 },
			{ x: -10, y: 10 },
			{ x: 0, y: 20 }
		],
		[
			{ x: 0, y: 10 },
			{ x: 10, y: 20 },
			{ x: 0, y: 30 }
		]
	].map((c) =>
		c.map((p) => {
			return { x: p.x + center.x, y: p.y + center.y - 135 };
		})
	);

	let jeraPolar = jera.map((c) => c.map((p) => toPolar(p)));

	let jeraFinal: Array<Array<Point>> = jeraPolar.map((c) =>
		c.map((pp) => getCoords(pp.angle + 270, pp.dist))
	);

	let jeraMulti: Array<Array<Point>> = [0, 45, 90, 135, 180, 225, 270, 315]
		.map((deg) => jeraPolar.map((c) => c.map((pp) => getCoords(pp.angle + deg, pp.dist))))
		.flat();
	console.log(jera);
	console.log(jeraFinal);
	let runes: Array<Array<Point>> = [jeraMulti].flat();
</script>

<div class="relative h-screen w-screen">
	<button class="btn" on:click={() => console.log(2)}>Show</button>

	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="h-96 w-96">
			<!-- Gradient Fill -->
			<!--
         <defs>
            <linearGradient id="grad60">
               <stop offset="5%" stop-color="blue" />
               <stop offset="95%" stop-color="black" />
            </linearGradient>
            <linearGradient id="grad180" gradientTransform="rotate(180)">
               <stop offset="5%" stop-color="blue" />
               <stop offset="95%" stop-color="black" />
            </linearGradient>
            <linearGradient id="grad300" gradientTransform="rotate(300)">
               <stop offset="5%" stop-color="blue" />
               <stop offset="95%" stop-color="black" />
            </linearGradient>

                   <radialGradient id="myGradient">
               <stop offset="10%" stop-color="gold" />
               <stop offset="95%" stop-color="red" />
             </radialGradient>
   </defs>
   -->

			<!-- Runes -->
			<g class="origin-center animate-spin-slow">
				{#each runes as relement}
					<polyline points={pointsToStr(relement)} stroke="black" stroke-width="3" fill="none" />
				{/each}
			</g>

			<!--
         {#each [60, 180, 300] as grad}
            <polyline points={pointsToStr([grad-60, grad, grad+60].map(x=>getCoords(x, radius - 2)))} stroke="none" class="animate-spin-slow origin-center"/>
         {/each}
-->

			<!-- Color Fill -->
			<!--<circle cx="200" cy="200" r="147" fill="none" stroke="#6a5a5b" stroke-width=14/>-->
			<!--<circle cx="200" cy="200" r="120" fill="none" stroke="#d9cfd4" stroke-width=40/>-->

			<!-- Outer Circles -->
			<circle cx="200" cy="200" r="100" fill="transparent" stroke="black" stroke-width="3" />
			<circle cx="200" cy="200" r="140" fill="transparent" stroke="black" stroke-width="2" />
			<circle cx="200" cy="200" r="155" fill="transparent" stroke="black" stroke-width="5" />

			<!-- Inner Dice -->
			<g class="origin-center animate-spin-slow">
				<polyline points={outerPoints} stroke="black" stroke-width="3" fill="none" />
				<polyline points={innerPoints} stroke="black" stroke-width="3" fill="none" />
			</g>

			<!-- Elemental Circles -->
			<g class="">
				{#each elementalCircles as ec}
					<circle
						cx={ec.x}
						cy={ec.y}
						r="25"
						fill="none"
						class="glowing-green"
						stroke="black"
						stroke-width="0"
					/>
				{/each}
			</g>
		</svg>
	</div>
</div>
