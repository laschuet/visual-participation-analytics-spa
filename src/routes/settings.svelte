<script lang="ts">
	import type { DatasetType } from '../types/dataset.type';

	const datasets: DatasetType[] = [
		{ id: 1, name: 'dataset 1' },
		{ id: 2, name: 'dataset 2' }
	];
	let selected: string;

	const handleSave = () => {};
	const handleSelect = () => {};
</script>

<h1 class="text-3xl font-bold text-gray-900">Settings</h1>
<div>
	<div class="Subhead">
		<div class="Subhead-heading">Change dataset</div>
	</div>
	<form on:submit={handleSave}>
		<dl class="form-group">
			<dt>
				<label for="dataset_select">Dataset</label>
			</dt>
			<dd>
				<select
					bind:value={selected}
					id="dataset_select"
					class="form-select"
					aria-label="Dataset"
					on:blur={handleSelect}
					on:change={handleSelect}
				>
					{#each datasets as dataset}
						<option value={dataset}>
							{dataset.name}
						</option>
					{/each}
				</select>
				<button class="btn" type="submit">Save</button>
			</dd>
		</dl>
	</form>
</div>
