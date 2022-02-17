<template>
  <button
    v-if="state.isButtonShown"
    v-bind="$attrs"
    @click="handleModalToogle(true)"
  >
    {{ text }}
  </button>

  <div
    v-if="isModalOpen"
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    @click="handleModalToogle(false)"
  >
    <div
      class="fixed mx-10"
      :class="state.width"
      @click.stop
    >
      <div class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
        <div class="flex flex-col px-12 py-10 bg-white">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onBeforeUnmount,
  reactive
} from 'vue'

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

interface State {
  isActive: boolean
  isButtonShown: boolean
  width: string
}

interface SetupReturn {
  state: State
  isModalOpen: ComputedRef<boolean>
  handleModalToogle(isActive: boolean): void
}

export default defineComponent({
  name: 'CommonModal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }): SetupReturn {
    const state = reactive({
      isActive: false,
      isButtonShown: !!props.text || !!props.title,
      width: DEFAULT_WIDTH
    })

    onBeforeUnmount(() => {
      handleModalToogle(false)
    })

    const isModalOpen = computed(() => {
      return state.isActive || props.modelValue
    })

    const handleModalToogle = (isActive: boolean) => {
      emit('update:modelValue', isActive)
      state.isActive = isActive
    }

    return {
      state,
      isModalOpen,
      handleModalToogle
    }
  }
})
</script>
