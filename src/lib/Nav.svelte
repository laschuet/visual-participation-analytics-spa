<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="bg-gray-800">
	<div class="max-w-full px-6">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-baseline space-x-4">
				<a
					href="/"
					class="px-3 py-2 rounded-md text-sm font-medium {$page.path === '/'
						? 'bg-gray-900 text-white'
						: 'text-gray-300 hover:bg-gray-700 hover:text-white'}">ViPA</a
				>
				<a
					href="settings"
					class="px-3 py-2 rounded-md text-sm font-medium {$page.path === '/settings'
						? 'bg-gray-900 text-white'
						: 'text-gray-300 hover:bg-gray-700 hover:text-white'}">Settings</a
				>
			</div>
		</div>
	</div>
</nav>
