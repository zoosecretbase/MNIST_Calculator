<script>
	import { equation } from '../stores/equationstore';
	import Layout from './__layout.svelte';
	console.log($equation);
</script>

<svelte:head>
	<title>AI understood arithmetic</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
	<div class="w-full text-center pb-8">
		<h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
			AI has "completely" understood arithmetic
		</h1>

		<p class="text-gray-400 font-normal text-base">
			This AI understood arithmetic using
			<a class="hover:underline text-indigo-400" href="https://en.wikipedia.org/wiki/Deep_learning"
				>Deep Learning</a
			>, in particular of
			<a class="hover:underline text-indigo-400" href="https://arxiv.org/abs/1406.2661">GAN</a>.
		</p>
		<p class="text-gray-400 font-normal text-base">
			See <a class="hover:underline text-indigo-400" href="https://medium.com/">here</a> to know the more deep aspect and us.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2 grid-col-1">
		{#each $equation as eq}
			<div class="bg-white rounded-lg">
				<p>
					<img class="mx-auto my-auto" src={eq.src} alt="mnist_list" />
				</p>
			</div>
		{/each}
	</div>
</section>
