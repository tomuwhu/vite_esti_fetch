<script>
  var time = new Date()
  $: [or, p, mp] = time.toLocaleTimeString().split(":")
  var [oratipus, szam] = ["analog", ""]
  setInterval(() => time = new Date(), 1000)
  const f = v => {
    if (v == "P") szam = -szam
    else if (v == "C") szam = ""
    else if (v == "=") szam = eval(szam)
    else szam += v
  }
  const fx = (t, r, o) =>
    250 + r * Math.cos(t * Math.PI / (o / 2) - Math.PI/2)
  const fy = (t, r, o) =>
    250 + r * Math.sin(t * Math.PI / (o / 2) - Math.PI/2) 
</script>

<main>
  <button on:click={() => oratipus = oratipus == "analog" ? "digital" : "analog"}>
    {oratipus == "analog" ? "Váltás digitálisra" : "Váltás analógra"}
  </button>
  <br>
  {#if oratipus == "digital"}
  <h1>{time.toLocaleTimeString()}</h1>{time.toLocaleDateString()}
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
  <br>
  <svg width="500" height="500">
    <circle cx=250 cy=250 r=243 fill="#002210" class="osz"
            stroke="yellow" stroke-width="2"/>
    {#each Array.from({length: 60}) as _, i}
      {#if i % 5}
        <line x2={fx(i, 214, 60)} y2={fy(i, 214, 60)}
              x1={fx(i, 220, 60)} y1={fy(i, 220, 60)}
              stroke="white" stroke-width="2"/>
      {:else}
        <circle cx={fx(i, 220, 60)} cy={fy(i, 220, 60)}
                r=15 fill="#057270" stroke="yellow" stroke-width="2"/>
      {/if}
    {/each}
    {#each Array.from({length: 12}) as _, i}
      <text x={fx(i, 220, 12)} y={fy(i, 220, 12)} class="osz"
            fill="yellow" text-anchor="middle" dominant-baseline="central"
            font-size="20">{i == 0 ? 12 : i}</text>
    {/each}
    <line x2={fx(p, 190, 60)} y2={fy(p, 190, 60)}
          x1=250 y1=250 stroke="yellow" stroke-width="6"/>
    <line x2={fx(or, 140, 12)} y2={fy(or, 140, 12)}
          x1=250 y1=250 stroke="magenta" stroke-width="10"/>
    <circle cx=250 cy=250 r=10 fill="white" stroke="#35f2e0" stroke-width="1"/>
    <line x2={fx(mp, 210, 60)} y2={fy(mp, 210, 60)}
          x1={fx(mp, -20, 60)} y1={fy(mp, -20, 60)}
          stroke="white" stroke-width="4" class="osz"/>
  </svg>
  {/if}
</main>

<style>
  .osz {
    filter: drop-shadow(0px 0px 2px rgb(0 0 0 / 1));
    filter: opacity(70%);
  }
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
