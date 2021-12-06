<script>
  import { fluidSize, maxSize, minSize, relativeSizePx, rootFontSize } from '../modules/form/store';
  import { calculateSizeValue } from '../modules/tracker/utils';
  
  export let text;

  // Determine the document width on resize of the window
  let screenWidth = document.documentElement.clientWidth
  const handleResize = ()=> {
    screenWidth = document.documentElement.clientWidth
  }

  // Compute the font-size
  $: sizeValue = calculateSizeValue(screenWidth, $fluidSize, $relativeSizePx, $minSize, $maxSize);
</script>

<svelte:window on:resize={handleResize}/>

<section class="example">

  <!-- Placeholder for future slider to simulate various viewport widths -->

  <aside class="example__msg">
    The current viewport <code>width</code> is 
    <strong class="example__msg--vp">{screenWidth}px</strong>.
    Therefor the computed <code>font-size</code> of the text below is
    <strong class="example__msg--fs"> {sizeValue}px</strong>.
  </aside>

  <div 
    class="example__txt" 
    style="--clamped-size: {text.substring(0, text.length - 1)}"
    contenteditable="true"
    >
    Hello world (this text is editable)
  </div>

</section>


<style>
  .example__msg {
    font-family: var(--font-family-primary);
    text-align: left;
  }

  .example__msg--vp {
    color: var(--color-secondary);
  }

  .example__msg--fs {
    color: var(--color-primary);
  }

  .example__txt {
    margin-top: var(--spacing-2);
    padding: var(--spacing-1);
    font-size: var(--clamped-size);
    border: 2px solid var(--color-secondary-faded);
    border-radius: var(--spacing-n4);
    
    &:focus {
      background-color: var(--color-secondary-faded);
      color: var(--color-secondary);
      outline: none;
      border-color: var(--color-secondary-tint);
    }
  }
</style>
