<script>
	import Clipboard from 'svelte-clipboard';
	export let text;
</script>

<pre>
    <code>
        {text}
    </code>
</pre>

<Clipboard {text} let:copy>
	<button on:click={copy}>Copy</button>
</Clipboard>
