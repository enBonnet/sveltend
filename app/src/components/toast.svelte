<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Cross from '../icons/cross.svelte';
	import AlertOctagon from '../icons/alert-octagon.svelte';
	import AlertCircle from '../icons/alert-circle.svelte';
	import AlertTriangle from '../icons/alert-triangle.svelte';
	import CheckCircle from '../icons/check-circle.svelte';
	import type { ToastTypes } from '../stores/toasts';

	const dispatch = createEventDispatcher();

	const theme = {
		error: { icon: AlertOctagon, color: 'text-red-400' },
		success: { icon: CheckCircle, color: 'text-green-400' },
		warning: { icon: AlertTriangle, color: 'text-yellow-400' },
		info: { icon: AlertCircle, color: 'text-blue-400' }
	};

	type Message = {
		action: { label: string; onClick?: () => void; href?: string };
		description: string;
	};

	export let type: ToastTypes = 'info';
	export let title: string;
	export let message: Message | undefined;
	export let dismissible: boolean = false;
</script>

<div
	class="relative flex max-w-xl items-center overflow-hidden rounded shadow-md dark:bg-gray-900 dark:text-gray-100"
>
	<div
		class={`flex flex-shrink-0 items-center self-stretch px-3 dark:bg-gray-700 ${
			theme[type].color ?? 'dark:text-violet-400'
		}`}
	>
		<svelte:component this={theme[type].icon} />
	</div>
	<div class="flex-1 p-4">
		{#if title}
			<h3 class={`text-xl font-bold ${theme[type].color ?? 'dark:text-violet-400'}`}>{title}</h3>
		{/if}
		{#if message}
			<p class="text-sm dark:text-gray-400">
				<span>{message.description}</span>
				{#if message.action.label && message.action.href}
					<a href="/" rel="referrer noopener" class="underline">{message.action.label}</a>
				{/if}
				{#if message.action.label && message.action.onClick}
					<div>
						<button
							on:click={message.action.onClick}
							class="self-center rounded px-8 py-3 font-semibold dark:bg-violet-400 dark:text-gray-900"
							>{message.action.label}</button
						>
					</div>
				{/if}
			</p>
		{/if}
	</div>
	{#if dismissible}
		<button on:click={() => dispatch('dismiss')} class="absolute right-2 top-2 text-gray-600">
			<Cross />
		</button>
	{/if}
</div>
