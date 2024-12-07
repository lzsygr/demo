<template>
  <div class="word-list">
      <div class="lang_nav">
          <a-tag  @click="handleTagClick(flag)"    v-for="(item,flag) in dictionaryMap" :color="nowDictionary === flag ? '#108ee9' :''"   :key="flag">
             {{flag}}
          </a-tag>
      </div>
      <a-row :gutter="20">
              <a-col :span="8"   v-for="(item,index) in wordList"  :key="index">
                  <span @click="seeMean(item.word)"  :class="item.type"> {{ item.word }}</span>
                  <span>【{{ item.status }}】</span>
                  <a-tag color="#f50"> {{ item.count }}</a-tag>
              </a-col>
       </a-row>
  </div>
</template>

<script>
  import {wordList,dictionaryMap} from '@/db/allDb.js'
  import { goWord } from '@/tools/function.js'
  export default {
    name: 'WordList',
    data(){
      return {
        wordList:[],
        /*
        示例：
            牛津：https://www.oxfordlearnersdictionaries.com/definition/english/world?q=world
            剑桥：https://dictionary.cambridge.org/dictionary/english-chinese-simplified/world
            vocabulary: https://www.vocabulary.com/dictionary/accompany
            欧路：https://dict.eudic.net/dicts/en/hope
            wordhippo近义词： https://www.wordhippo.com/what-is/another-word-for/very.htm
            Bing词典：https://cn.bing.com/dict/search?q=hello
            朗文词典：https://www.ldoceonline.com/dictionary/take
            韦氏词典：https://www.merriam-webster.com/dictionary/take
            柯林斯词典：https://www.collinsdictionary.com/dictionary/english/take
            英语词源：https://www.etymonline.com/cn/word/take
            金山词典：https://www.iciba.com/word?w=take
            趣词词典：https://www.quword.com/w/take
            海词词典：https://dict.cn/search?q=take
         */
        dictionaryMap,
        nowDictionary:'剑桥',
        // url:dictionaryMap[this.nowDictionary]

      }
    },
    methods:{
      handleTagClick(theKey) {
        this.nowDictionary = theKey
      },
      seeMean(wd){
        let url = dictionaryMap[this.nowDictionary];
        goWord(this.nowDictionary,url,wd)
      },
      async  fetchUsers() {
        try {
          // 发送GET请求
          const response = await fetch('http://localhost:9999/api/users', {
            method: 'GET', // 明确指定请求方法为GET（虽然GET是默认值）
            headers: {
              'Content-Type': 'application/json'
            }
          });
          // 检查HTTP状态码
          if (!response.ok) {
            // 如果状态码不在200-299之间，抛出错误
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // 解析响应体为JSON格式
          const data = await response.json();
          // 处理成功响应
          console.log('用户数据:', data);
        }
        catch (error) {
          // 处理请求或解析过程中发生的任何错误
          console.error('请求失败:', error.message);
        }
      }
    },
    created(){
      this.wordList = wordList;
      // 创建用户
//      fetch('http://localhost:9999/api/users', {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json'
//        },
//        body: JSON.stringify({
//          name: 'test2',
//          email: 'test2@example.com',
//          age: 20
//        })
//      })
//        .then(response => response.json())
//        .then(data => console.log(data));

      // 更新用户
      fetch('http://localhost:9999/api/users/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'test4',
          email: 'test3@example.com',
          age: 100
        })
      })
        .then(response => response.json())
        .then(data => console.log(data));

      // this.fetchUsers();

      // 获取所有用户
//      fetch('http://localhost:9999/api/users')
//        .then(response => response.json())
//        .then(data => console.log(data));



    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .word-list{
        margin: 0 auto; width: 1200px;
       .ant-col{
           margin-bottom: 16px; font-size: 16px; cursor: pointer;
           .h{color: #FF7875; font-weight: bold;}
           .m{color: #FFCF00;}
           .l{color: #1890FF;}
       }
        .lang_nav{
            padding-bottom: 16px;
            .ant-tag {font-size: 14px;cursor: pointer; padding: 3px 7px;}
        }

    }
</style>
