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
  <input type="text">
</main>

<style>

</style>
