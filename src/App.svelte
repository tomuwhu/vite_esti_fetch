<script>
  var time = new Date()
  var szam = ""
  var zo = false
  setInterval(() => 
    time = new Date(),
    1000
  )
  const f = v => {
    if (v == "P") {
      szam = -szam
    }
    else if (v == "(") {
      zo = !zo
      szam += zo ? "(" : ")"
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
  <h1>
    {time.toLocaleTimeString()}
  </h1>
  {time.toLocaleDateString()}
  <hr>
  <table>
    <tr>
      <th colspan=4><input type="text" bind:value={szam}></th>
    </tr>
    {#each ["CP%/","789*","456-","123+","(0,="] as o}
      <tr>
        {#each o as v}
          <td on:click={() => f(v)}>
            {#if v == "P"}±
            {:else if v == "(" && zo})
            {:else}{v}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </table>
</main>

<style>
  input {
    text-align: right;
    font-size: 20px;
  }
  .out {
    color: yellow;
    font-size: 20px;
    overflow-wrap: break-word;
    max-width: 500px;
  }
  table {
    border-spacing: 10px;
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
