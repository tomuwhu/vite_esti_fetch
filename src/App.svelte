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
  2-es számrendszer: {Number(szam)
    .toString(2)} 
  <br>
  16-os számrendszer: {Number(szam)
    .toString(16)
    .toLocaleUpperCase()}
</main>

<style>
  input {
    text-align: right;
    font-size: 20px;
  }
</style>
