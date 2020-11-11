<template>
  <div>
    <div class="menu">
      <ul>
        <li><a href="#">111</a></li>
        <li><a href="#">111</a></li>
        <li><a href="#">111</a></li>
        <li><a href="#">111</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    methods: {
    }
  }
}
</script>
<style scoped>
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: rgb(106, 127, 155);
  width: 250px;
  height: 100%;
  position: fixed;
}
.menu ul a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: #555;
  color: white;
}
</style>

