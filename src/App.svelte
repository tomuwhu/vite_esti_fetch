<script>
  var time = new Date()
  $: mp = time.toLocaleTimeString().split(":")[2]
  $: p = time.toLocaleTimeString().split(":")[1]
  $: or = time.toLocaleTimeString().split(":")[0]
  var oratipus = "analog"
  var szam = ""
  setInterval(() => 
    time = new Date(),
    1000
  )
  const f = v => {
    if (v == "P") {
      szam = -szam
    }
    else if (v == "C") {
      szam = ""
    }
    else if (v == "=") {
      szam = eval(szam)
    }
    else {
      szam += v
    }
  }
</script>

<main>
  {time.toLocaleTimeString().split(":")[2]}
  <button on:click={() => oratipus = oratipus == "analog" ? "digital" : "analog"}>
    {oratipus}
  </button>
  <br>
  {#if oratipus == "digital"}
  <h1>
    {time.toLocaleTimeString()}
  </h1>
  {time.toLocaleDateString()}
  <hr>
  <table>
    <tr>
      <th colspan=4><input type="text" bind:value={szam}></th>
    </tr>
    {#each ["CP%/","789*","456-","123+","0.=","()"] as o}
      <tr>
        {#each o as v}
          <td on:click={() => f(v)}>
            {v == "P" ? '±' : v}
          </td>
        {/each}
      </tr>
    {/each}
  </table>
  {:else}
  {or}
  <svg width="500" height="500">
   <line x1=250 y1=250 x2={
    250 + 220 * Math.cos(mp * Math.PI / 30- Math.PI/2)
  } y2={
    250 + 220 * Math.sin(mp * Math.PI / 30- Math.PI/2)
  } stroke="white" stroke-width="3"/>
  <line x1=250 y1=250 x2={
    250 + 200 * Math.cos(p * Math.PI / 30- Math.PI/2)
  } y2={
    250 + 200 * Math.sin(p * Math.PI / 30- Math.PI/2)
  } stroke="yellow" stroke-width="6"/>
    <line x1=250 y1=250 x2={
      250 + 150 * Math.cos(or * Math.PI / 6 - Math.PI/2)
    } y2={
      250 + 150 * Math.sin(or * Math.PI / 6 - Math.PI/2)
    } stroke="magenta" stroke-width="10"/>
  </svg>
  {/if}
</main>

<style>
  input {
    text-align: right;
    font-size: 20px;
  }
  table {
    border-spacing: 10px;
  }
  h1 {
    font-size: 20px;
  }
  :global(td) {
    width: 40px;
    height: 40px;
    text-align: center;
    border: 1px solid black;
    font-size: 20px;
    font-weight: bold;
    background-color: white;
    color: black;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 6px;
    box-shadow: 1px 1px 1px inset black;
  }
  :global(td:hover) {
    background-color: lightgray;
  }
  :global(td:active) {
    background-color: gray;
  }
</style>
