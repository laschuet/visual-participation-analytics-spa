<script lang="ts">
	import type { ContributionType } from '../types/contribution.type';

	export let contribution: ContributionType = {
		author: '',
		content: '',
		created_at: '',
		id: undefined,
		lat: undefined,
		long: undefined,
		title: ''
	};
</script>

<div class="max-w-4xl p-4 mb-4 bg-white rounded-md border border-gray-300">
	<div class="flex justify-between items-center">
		<span class="text-sm font-light text-gray-600 dark:text-gray-400">{contribution.author}</span>
		<span class="text-sm font-light text-gray-600 dark:text-gray-400"
			>{contribution.created_at}</span
		>
	</div>
	<div class="mt-2">
		<p class="text-xl text-gray-700">{contribution.title}</p>
		<p class="mt-2 text-gray-600 dark:text-gray-300">{contribution.content}</p>
	</div>
	<div class="flex items-center mt-2">
		<button
			type="button"
			class="p-2 mr-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
		>
			<!-- Heroicon name: chevron-down -->
			<svg
				class="h-4 w-4"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
		<button
			type="button"
			class="p-2 mr-1 text-white bg-gray-400 rounded-md hover:bg-gray-500 focus:outline-none"
		>
			<!-- Heroicon name: reply -->
			<svg
				class="h-4 w-4"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
				/>
			</svg>
		</button>
	</div>
</div>
