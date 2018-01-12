<template>
   <div class="header">
      <h1>如影随形</h1>
      <h2>影子是一个会撒谎的精灵，它在虚空中流浪和等待被发现之间;在存在与不存在之间....</h2>
      <nav class="nav">
          <ul>
              <li class="active"><router-link to="/">首页</router-link></li>
              <li><router-link to="/about">关于我</router-link></li>
              <li><router-link to="/website">前端分享</router-link></li>
              <li><router-link to="/server">后端分享</router-link></li>
          </ul>
          <div class="logo">
            <router-link to="/"></router-link>
          </div>
      </nav>
  </div>
</template>

<style lang="less" scoped>
  @import './header.less';
</style>
