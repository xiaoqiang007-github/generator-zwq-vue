  <template>
  <div>
    <h1>My Vue Web Component</h1>
    <div>{{ msg }}</div>
    <div>{{ list }}</div>
  </div>
</template>
<script>
export default {
  props: ['msg', 'list']
};
</script>