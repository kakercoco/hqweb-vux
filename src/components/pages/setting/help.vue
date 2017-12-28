<template>
	<div>
		<group>
      <cell title="帮助" is-link  link="/setting/help"></cell>
    </group>
	</div>
</template>

<script>
// import axios from '../../libs/axios.js'
import { Group, Cell } from 'vux'
export default {
  name: 'help',
  components: {
    Group,
    Cell
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>