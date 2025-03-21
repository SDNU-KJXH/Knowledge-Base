<script setup>
import HeroDiagram from './HeroDiagram.vue'
</script>

<template>
  <div class="hero">
    <div class="container">
<<<<<<< HEAD
      <!-- ViteConf Replay Button -->
      <a
        href="https://ed.qcea.top"
=======
      <!-- ViteConf 2025 Button -->
      <a
        href="https://viteconf.org/?utm=vite"
>>>>>>> upstream/main
        class="hero__pill"
        target="_blank"
      >
        <img src="/viteconf.svg" alt="Viteconf logo" width="20" height="20" />
<<<<<<< HEAD
        <span>点击使用免费的满血版DeepSeek R1</span>
      </a>

      <!-- Heading -->
      <h1>山东师范大学<br />科技协会</h1>
      <!-- Tagline -->
      <h3>
        山东师范大学科技协会官方网站与知识库
=======
        <span>ViteConf 2025</span>
      </a>

      <!-- Heading -->
      <h1>卓越的 Web 开发<br />构建工具</h1>
      <!-- Tagline -->
      <h3>
        Vite 是一个超快的前端构建工具 <br> 赋能下一代 Web 应用的发展
>>>>>>> upstream/main
      </h3>

      <!-- CTA Buttons -->
      <div class="hero__actions">
<<<<<<< HEAD
        <a href="/guide/" class="btn btn--primary">电脑知识</a>
        <a href="https://ed.qcea.top" class="btn btn--primary">购买指南</a>
        <a href="https://ed.qcea.top" class="btn btn--primary">软件推荐</a>
        <a href="https://ed.qcea.top" class="btn btn--primary">活动专栏</a>
=======
        <a href="/guide/" class="btn btn--primary">开始</a>
>>>>>>> upstream/main
        <a
          href="https://github.com/vitejs/vite"
          target="_blank"
          class="btn btn--outline"
        >
<<<<<<< HEAD
          关于我们
=======
          <img src="/github.svg" alt="GitHub logo" width="20" height="20" />
          GitHub
>>>>>>> upstream/main
        </a>
      </div>
    </div>

    <!-- Animated Diagram -->
    <HeroDiagram />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  z-index: 2;
  margin-bottom: 0;
  background-color: #101010;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 902px;
  margin: 60px auto 0;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    margin: 95px auto 0;
  }
}

.hero__pill {
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  display: inline-flex;
  padding: 6px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid rgba(189, 52, 254, 0.5);
  background: radial-gradient(
    1686.42% 113.39% at 83.25% 2.56%,
    rgba(189, 52, 254, 0.1) 0%,
    rgba(189, 52, 254, 0) 100%
  );
  box-shadow: none;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }

  span {
    color: #fff;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  &:hover {
    animation: hero-pill-glow 1600ms ease-out infinite alternate;
  }
}

@keyframes hero-pill-glow {
  0% {
    border-color: rgba(189, 52, 254, 0.5);
    box-shadow:
      0 0 5px rgba(189, 52, 254, 0.01),
      inset 0 0 5px rgba(189, 52, 254, 0.1);
  }
  100% {
    border-color: rgba(189, 52, 254, 0.6);
    box-shadow:
      0 0 20px rgba(189, 52, 254, 0.2),
      inset 0 0 10px rgba(189, 52, 254, 0.2);
  }
}

.hero__actions {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
}
</style>
