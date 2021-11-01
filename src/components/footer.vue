<template>
    <footer>
        <button v-on:click="deleteAll" class="del_all">전부삭제</button>
    </footer>
</template>

<script>

let answer = [];
let arr = [0,1,2,3];

const dfs = (nums, num, numnow, arr = []) => {
  //3개를 선택한다는가정에 3개가 선택 됐다면 출력
  if (num === numnow) {
      answer.push([...arr]);
  }
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, numnow, arr);
      arr.pop();
    }
  }
};
for (let i = 1; i < arr.length; i++) {
    dfs(arr, 0 , i);
}

console.log(answer); //[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]


export default {
    methods: {
        deleteAll() {
            this.$store.commit('clearAllItems');
        }
    }
};
</script>

<style scoped>
footer {
    margin: 20px 20px 30px;
}

.del_all {
    display: block;
    border-radius: 3px;
    background: #f55;
    margin: 8px auto 0;
    border: 0 none;
    outline: 0 none;
    letter-spacing: -0.02em;
    font-size: 18px;
    padding: 7px 25px;
    color: #fff;
    font-weight: 700;
}
</style>
