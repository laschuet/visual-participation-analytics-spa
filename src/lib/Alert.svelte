<script lang="ts">
	import { alertMessage } from '../stores';

	const handleAlertClose = () => {
		$alertMessage = '';
	};
</script>

{#if $alertMessage}
	<div class="bg-indigo-600" role="alert">
		<div class="max-w-full px-6 py-2">
			<div class="flex items-center justify-between flex-wrap">
				<p class="ml-2 font-medium text-white truncate">Message</p>
				<div class="order-2 flex-shrink-0">
					<button
						type="button"
						class="-mr-2 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
						on:click={handleAlertClose}
					>
						<span class="sr-only">Dismiss</span>
						<!-- Heroicon name: x -->
						<svg
							class="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
