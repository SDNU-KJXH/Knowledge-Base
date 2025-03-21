<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { useSlideIn } from '../../../composables/useSlideIn'
import { useCardAnimation } from '../../../composables/useCardAnimation'

// Animation state
const commandTriggered = ref(false)
const highlightEnter = ref(true)

/**
 * Slide the card in when the page loads
 */
useSlideIn('#instant-server-start-card')

/**
 * Start the animation when the card is hovered
 */
const { startAnimation } = useCardAnimation(
  '#instant-server-start-card',
  () => {
    const timeline = gsap.timeline()

    // Execute the `npm run dev` command
    timeline.call(() => {
      commandTriggered.value = true
      highlightEnter.value = false
    })
  },
  {
    once: true,
  },
)

/**
 * Run the command animation on enter press
 */
function handleEnterPress(event) {
  if (event.key === 'Enter') {
    startAnimation()
    window.removeEventListener('keydown', handleEnterPress)
  }
}

/**
 * Listen for enter key presses
 */
onMounted(() => {
  window.addEventListener('keydown', handleEnterPress)
})

/**
 * Clean up when unmounting the component.
 */
onUnmounted(() => {
  window.removeEventListener('keydown', handleEnterPress)
})
</script>

<template>
  <div
    id="instant-server-start-card"
    class="feature-card"
    @mouseover.stop.prevent="startAnimation"
  >
    <div class="feature__visualization">
      <div class="terminal" :class="{ 'terminal--active': commandTriggered }">
        <div class="terminal__skeleton-line" />
        <div class="terminal__skeleton-line" />
        <Transition name="command-transition">
          
        </Transition>
        <Transition name="command-transition">
          <svg
            class="terminal__enter"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            v-show="!commandTriggered"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="28"
              height="28"
              rx="4"
              fill="url(#paint0_linear_693_14840)"
            />
            <rect
              width="28"
              height="28"
              rx="4"
              fill="url(#paint1_linear_693_14840)"
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="27"
              rx="3.92105"
              stroke="white"
              stroke-opacity="0.1"
            />
            <g filter="url(#filter0_f_693_14840)">
              <path
                d="M19.9999 8V14.75C19.9999 15.5456 19.6839 16.3087 19.1213 16.8713C18.5586 17.4339 17.7956 17.75 16.9999 17.75H10.1854L12.0604 19.625L10.9999 20.6855L7.31445 17L10.9999 13.3145L12.0604 14.375L10.1854 16.25H16.9999C17.3978 16.25 17.7793 16.092 18.0606 15.8106C18.3419 15.5293 18.4999 15.1478 18.4999 14.75V8H19.9999Z"
                fill="#FAFAFA"
              />
            </g>
            <path
              d="M19.9999 8V14.75C19.9999 15.5456 19.6839 16.3087 19.1213 16.8713C18.5586 17.4339 17.7956 17.75 16.9999 17.75H10.1854L12.0604 19.625L10.9999 20.6855L7.31445 17L10.9999 13.3145L12.0604 14.375L10.1854 16.25H16.9999C17.3978 16.25 17.7793 16.092 18.0606 15.8106C18.3419 15.5293 18.4999 15.1478 18.4999 14.75V8H19.9999Z"
              fill="#FAFAFA"
            />
            <defs>
              <filter
                id="filter0_f_693_14840"
                x="1.31445"
                y="2"
                width="24.6855"
                height="24.6855"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="3"
                  result="effect1_foregroundBlur_693_14840"
                />
              </filter>
              <linearGradient
                id="paint0_linear_693_14840"
                x1="14"
                y1="0"
                x2="14"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#404040" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_693_14840"
                x1="14"
                y1="0"
                x2="14"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#404040" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
            </defs>
          </svg>
        </Transition>
        <div class="terminal__enter-pulse" v-show="highlightEnter" />
        <Transition name="ready-label-transition">
          <span class="terminal__ready-label" v-if="commandTriggered"
            >已在风雨中走过34年</span
          >
        </Transition>
        <div class="terminal__glow" />
      </div>
      <div class="connection-line" :class="{ active: commandTriggered }" />
    </div>
    <div class="feature__meta">
      <div class="meta__title">无限进步</div>
      <div class="meta__description">
        科技协会成立于1990年5月4日，时至今日，科技协会已经走过了34年的风雨历程。
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  perspective: 100px;

  @media (min-width: 768px) {
    transform: translate3d(-60px, 0, 0);
  }

  /* Extend height on smaller devices, to make room for text */
  @media (max-width: 420px) {
    height: 400px;
  }

  /* Or for really small screen */
  @media (max-width: 340px) {
    height: 420px;
  }

  .feature__meta {
    max-width: calc(100% - 30px);
  }
}

.feature__visualization {
  .terminal {
    position: absolute;
    top: 33px;
    left: 32px;
    right: 0;
    height: 170px;
    border-radius: 12px 0 0 12px;
    background: #171717;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    border: 1px solid transparent;
    border-right: none;

    .command-transition-enter-active,
    .command-transition-leave-active,
    .ready-label-transition-enter-active,
    .ready-label-transition-leave-active {
      transition: all 0.4s ease;
    }

    .command-transition-enter-active {
      transition: all 1s ease;
      transition-delay: 0.5s;
    }

    .ready-label-transition-enter-active {
      transition-delay: 0.2s;
    }

    .ready-label-transition-leave-active {
      transition: all 0.6s ease;
    }

    .command-transition-enter-from,
    .command-transition-leave-to {
      opacity: 0;
    }

    .ready-label-transition-enter-from,
    .ready-label-transition-leave-to {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }

    * {
      user-select: none;
    }

    .terminal__skeleton-line {
      height: 10px;
      border-radius: 20px;
      opacity: 0.6;
      background: #404040;
      position: absolute;
      left: 32px;

      &:nth-child(1) {
        top: 33px;
        width: 45%;
        max-width: 170px;
      }

      &:nth-child(2) {
        top: 64px;
        width: 60%;
        max-width: 230px;
      }
    }

    .terminal__command {
      position: absolute;
      left: 32px;
      top: 100px;
      margin-bottom: 0;
      border-right: 1px solid white;
      animation: cursor-blink 1s linear infinite;
    }

    .terminal__enter {
      position: absolute;
      top: 93px;
      left: 165px;
      border-radius: 2px;
    }

    .terminal__enter-pulse {
      width: 28px;
      height: 28px;
      position: absolute;
      top: 93px;
      left: 165px;
      border-radius: 5px;
      pointer-events: none;
      border: 1px solid white;
      opacity: 0;
      box-shadow: 0 0 5px 0 rgb(255, 255, 255);
      animation: enter-pulse 4s ease-out infinite;
    }

    .terminal__ready-label {
      font-family: Inter, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.4px;
      background: linear-gradient(
        to left,
        #13b351 0%,
        rgba(19, 179, 81, 0.7) 120%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: absolute;
      left: 32px;
      top: 110px;
      pointer-events: none;
    }

    .terminal__glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      border-radius: 12px 0 0 12px;
      background: url('/noise.png'),
        radial-gradient(
          ellipse 140% 80% at 96% bottom,
          #13b351 0%,
          transparent 50%
        );
      filter: blur(15px);
      opacity: 0;
      pointer-events: none;
      will-change: opacity, transform;
      transition: all 2s ease-in-out;

      @media (min-width: 768px) {
        transform: translate3d(60px, 0, 0);
      }
    }

    &.terminal--active {
      border: 1px solid #13b351;
      border-right: none;
      box-shadow: 0 0 11px 0 rgba(19, 179, 81, 0.3);
      transition-delay: 0.2s;

      .terminal__glow {
        transition: all 0.6s ease-in-out;
        transform: translate3d(0, 20px, 0);
        opacity: 1;
      }
    }
  }

  .connection-line {
    position: absolute;
    top: 203px;
    right: 40px;
    width: 1px;
    height: calc(100% - 170px - 33px);
    background: url('/noise.png'), #13b351;
    box-shadow: 0 0 10px 0 #13b351;
    transition: all 0.5s ease-in;
    will-change: transform, opacity;
    opacity: 0.5;
    transform-origin: center bottom;
    transform: scaleY(0);
    visibility: hidden;

    &.active {
      transition: all 0.3s ease-out;
      visibility: visible;
      opacity: 1;
      transform: scaleY(1);
    }
  }
}

@keyframes enter-pulse {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6) translate3d(0, 0, 0);
    opacity: 0;
  }
}

@keyframes cursor-blink {
  0% {
    border-color: transparent;
  }
  49% {
    border-color: transparent;
  }
  50% {
    border-color: #ffffff;
  }
  100% {
    border-color: #ffffff;
  }
}
</style>
