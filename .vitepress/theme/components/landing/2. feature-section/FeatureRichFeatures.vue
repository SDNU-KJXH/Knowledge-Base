<script setup>
import logoJSON from './images/json.svg'
import logoCSS from './images/css3.svg'
import logoJS from './images/js.svg'
import logoTS from './images/ts.svg'
import logoWA from './images/wa.svg'
import logoPostCSS from './images/postcss.svg'
import { useSlideIn } from '../../../composables/useSlideIn'
import { useCardAnimation } from '../../../composables/useCardAnimation'

/**
 * Slide the card in when the page loads
 */
useSlideIn('#rich-features-card')

/**
 * Start the animation when the card is hovered
 */
const { isCardActive, startAnimation } = useCardAnimation(
  '#rich-features-card',
  null,
  {
    once: true,
  },
)
</script>

<style scoped>
@property --opacity {
  syntax: '<number>';
  initial-value: 1;
  inherits: false;
}

.feature-card {
  @media (min-width: 768px) {
    transform: translate3d(-60px, 0, 0);
  }

  &.active {
    .feature__visualization {
      .card {
        &:after {
          border-color: rgba(60, 60, 60, 0.8);
          --opacity: 0.8;
          box-shadow: var(--card-color) 0 10px 20px -10px;
        }
      }

      .center-glow {
        opacity: 1;
      }
    }
  }
}

.feature__visualization {
  display: flex;
  justify-content: center;
  align-content: flex-start;

  .card-container {
    flex-shrink: 0;
    mask-image: radial-gradient(
      ellipse 50% 45% at center 25%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    position: relative;
    background: #141414;

    .background-card {
      fill: #181818;
    }
  }

  .center-glow {
    position: absolute;
    top: 0;
    left: 50%;
    width: 300px;
    height: 140px;
    background: #ffffff;
    filter: blur(80px);
    z-index: 5;
    transform: translate3d(-50%, 0, 0);
    opacity: 0.5;
    transition: opacity 0.3s ease;
    will-change: opacity;
    mix-blend-mode: overlay;
  }

  .card {
    position: absolute;
    z-index: 1;
    display: flex;
    background: var(--card-color);
    width: 85px;
    aspect-ratio: 1;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease;
    will-change: box-shadow;
    --card-color: #181818;

    * {
      position: relative;
      z-index: 2;
    }

    &:after {
      border: 1px solid rgba(60, 60, 60, 0.5);
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: 10px;
      --opacity: 0.99;
      background: linear-gradient(
        to bottom,
        #181818 30%,
        rgba(24 24 24 / var(--opacity)) 100%
      );
      will-change: background;
      box-shadow: var(--card-color) 0 5px 10px -30px;
      transition:
        --opacity 0.8s ease,
        box-shadow 0.5s ease;
      z-index: 1;
    }

    &.card--json {
      top: -23px;
      left: 105px;
    }

    &.card--css {
      top: 83px;
      left: 105px;
      --card-color: #2a53dd;
    }

    &.card--js {
      top: 83px;
      left: 210px;
      --card-color: #f7e425;
    }

    &.card--ts {
      top: 83px;
      left: 315px;
      --card-color: #3d95d2;
    }

    &.card--wa {
      top: 83px;
      left: 420px;
      --card-color: #7259f0;
    }

    &.card--postcss {
      top: 189px;
      left: 420px;
    }
  }
}
</style>
