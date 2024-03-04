import { ref } from 'vue'

export default function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const update = () => {
    count.value++
  }
  return { count, update }
}
