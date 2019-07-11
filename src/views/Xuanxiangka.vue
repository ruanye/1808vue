<template>
  <div>选项卡
    <ul class="tab">
      <!-- li index 0   li  index 1  li   index 2   -->
      <li :class="{active:tindex==index}"
          v-for="(item,index) in a"
          :key="index"
          @click="tabchange(index)">{{item}}</li>
    </ul>
    <!-- 奖品的编号和中奖同学的编号相等 奖品的编号 -->
    <div v-for="(item,index) in b"
         :key="index">
      <span v-if="index==tindex">
        {{item}}
      </span>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      a: ["崔浩然", "岳松兵", "韩晶"],
      b: ["500万", "自行车", "馒头"], //对应的奖品
      tindex: 0 //默认选中的索引 中奖同学的编号
    };
  },
  methods: {
    tabchange(index) {
      //0 ，1 ，2  把tindex 等于当前点击的index
      // 学号1li  学号2的li 学号3的li  默认学号1中奖 1分钱
      //点击的时候 把中奖的编号和你点击的同学的学号一致
      this.tindex = index;
    }
  }
};
</script>
<style lang="less">
.tab {
  &-abc {
    color: purple;
  }
  display: flex;
  li {
    margin: 10px;
    background: chartreuse;
    &.active {
      //&.active = li.active
      background: blue;
    }
  }
}
</style>



