<template>
  <div>
    <span>Filter</span>
    <select @change="filterUsers($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterUsers",
  methods: mapActions(["filterUsers"]),
};
</script>

<style>
span {
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0 10px;
}
select {
  padding: 6px;
  border: rgb(6, 66, 112) 1px solid;
  background: #fff;
}
</style>
