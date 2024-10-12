<script>
  var time = new Date()
  var szam = 0
  setInterval(() => 
    time = new Date(),
    1000
  )
</script>

<main>
  <h1>
    {time.toLocaleTimeString()}
  </h1>
  {time.toLocaleDateString()}
  <hr>
  <input type="text" bind:value={szam}>
  <br>
  2-es számrendszer:<br>
  <div class="out">{BigInt(szam)
    .toString(2)}</div> 
  <br>
  16-os számrendszer:<br>
  <div class="out">
    {BigInt(szam)
      .toString(16)
      .toLocaleUpperCase()}
  </div>
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
</style>
