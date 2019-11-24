<template>
  <div>
<Gheader title="地址管理" back="1"/>
<div class="pad_container">
<!-- 地址列表 -->
<AddrCard v-for="item in addrList" :key="item.id" 
:name="item.name"
:phone="item.mobile"
:type="item.default"
:province="item.province"
:city="item.city"
:area="item.area"
:address="item.address"
:to="'/editAddr?id='+item.id"
/>
<router-link tag="div" to="/editAddr" class="addBtn flex">
  <van-icon name="plus" />
  <p>添加新地址</p>
</router-link>

</div>
  </div>
</template>
<script>
import AddrCard from '../components/AddrCard'
export default {
  components:{
    AddrCard
  },
  methods:{
    queryAddrList(){
      this.$store.dispatch('getAddrList')
    },
  },
  computed:{
    addrList(){
      return this.$store.state.addrList
    },
  },
  watch:{
    addrList(d){
      console.log(d)
    }
  },
  mounted(){
    this.queryAddrList()
  },
}
</script>
<style scoped>
.addBtn {
  margin: .2rem auto;
  padding: .2rem;
  font-size: .4rem;
  border-bottom: 1px solid #CCCCCC;

}
</style>