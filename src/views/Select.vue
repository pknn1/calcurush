<template>
  <div class="page-wrapper">
    <div class="head-content">
      <div class="back-button">
        <a class="btn btn-text" @click.prevent="$router.push({ name: 'home' })">
          <font-awesome-icons
            :icon="['fas', 'chevron-left']"
          ></font-awesome-icons>
        </a>
      </div>
      <span class="header">Levels</span>
    </div>
    <div class="body">
      <div class="level-cards">
        <level-card
          v-for="level in levels"
          :key="level.toString()"
          :level="level.toString()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LevelCard from '@/components/LevelCard'

export default {
  components: {
    LevelCard
  },
  data() {
    return {
      levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'hard']
    }
  },
  mounted() {
    this.getHighscores()
  },
  methods: {
    ...mapActions('highscore', ['getHighscores'])
  }
}
</script>

<style lang="sass" scoped>
@import '@/theme/variables.sass'
.page-wrapper
  @apply flex flex-col justify-center items-center
  .head-content
    @apply fixed pin-t m-auto py-3 h-6 w-full
    background: $white
    .back-button
      @apply absolute pin-l ml-3
    .header
    @apply text-lg font-bold text-center uppercase
  .body
    @apply mb-6 mt-8
    .level-cards
      @apply flex flex-wrap justify-around
</style>
