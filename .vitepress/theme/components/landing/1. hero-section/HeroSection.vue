<script setup>
import HeroDiagram from './HeroDiagram.vue'
</script>

<template>
  <div class="hero">
    <div class="container">
      <!-- ViteConf Replay Button -->
      <a
        href="https://naochat.cnies.org"
        class="hero__pill"
        target="_blank"
      >
        <img src="/deepseek.png" alt="NAO Chat Logo" width="20" height="20" />
        <span>点击使用科协满血版DeepSeek R1</span>
      </a>

      <!-- Heading -->
      <h1>山东师范大学<br />科技协会</h1>
      <!-- Tagline -->
      <h3>
        山东师范大学科技协会官方网站与知识库
      </h3>

      <!-- CTA Buttons -->
      <div class="hero__actions">
        <a href="/knowledge/" class="btn btn--primary">电脑知识</a>
        <a href="/laptops/" class="btn btn--primary">购买指南</a>
        <a href="/softwares/" class="btn btn--primary">软件推荐</a>
        <a href="/activities/" class="btn btn--primary">科协活动</a>
        <a
          href="/team"
          target="_blank"
          class="btn btn--outline"
        >
          关于我们
        </a>
      </div>
    </div>

    <!-- Animated Diagram -->
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
