<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer.open"
      app
    >
      <v-toolbar flat class="transparent">
          <v-toolbar-title>Beentin<span style="color:#93e77f">g</span></v-toolbar-title>
        <template v-slot:extension>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="./assets/AIth.png">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>신소휘</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        </template>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <img style="border-radius:50%; width:30px" :src="item.img">
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      flat
      :fixed="toolbar.fixed"
    >
      <v-toolbar-title>창업창업</v-toolbar-title>
    </v-toolbar>

    <v-footer :fixed="footer.fixed" app>
        <v-btn><v-icon large>widgets</v-icon></v-btn>
        <v-btn><v-icon large>folder_open</v-icon></v-btn>
        <v-flex xs3>
          <v-text-field
            label="Fill in your text"
            single-line
            solo
          ></v-text-field>
        </v-flex>
        <v-btn>전송</v-btn>
      </v-footer>

    <v-content>
      <v-container fluid fill-height style="background-color:#fff">
        <v-layout justify-left>
          <v-flex shrink>

          <v-list class="pa-0">
            <v-list-tile 
              v-for="item in chatItems"
              :key="item.title"
            >
              <v-list-tile-avatar>
                <img :src='item.img'>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                <v-list-tile-action-text>
                  {{item.content}}
                </v-list-tile-action-text>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
            
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import imgValue from './assets/AIth.png'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: {
          open: true,
        },
        items: [
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
          { title: '신소휘', img: imgValue },
        ],
        chatItems: [
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
          { title: '신소휘', img: imgValue, content: "화랑이 존나 싫다" },
          { title: '신소휘', img: imgValue, content: "화랑이 도움반 됬어 얘들아 어떡해?" },
          { title: '신소휘', img: imgValue, content: "죽여" },
        ],
        right: null,
        toolbar: {
          fixed: true,
        },
        footer: {
          fixed:true,
        },
    }
  }
}
</script>
