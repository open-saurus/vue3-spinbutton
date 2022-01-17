<script setup lang="ts">
const emit = defineEmits<{
  (event: "update:modelValue", value: number): void;
}>();

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const increment = () => emit("update:modelValue", props.modelValue + 1);
const decrement = () => emit("update:modelValue", props.modelValue - 1);
</script>

<template>
  <div class="spin-button">
    <button class="btn-negative" @click="decrement">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
      >
        <path d="M0 10h24v4h-24z" />
      </svg>
    </button>

    <div class="spin-value">
      <label>{{ props.modelValue }}</label>
    </div>

    <button class="btn-positive" @click="increment">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
      >
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.spin-button {
  display: flex;
  min-width: 150px;
  max-width: 150px;
  margin: 10px;
  font-family: inherit;
}
.spin-button .spin-value {
  display: block;
  flex: 1;
  border: 1px solid #0069ed;
  border-left: unset;
  border-right: unset;
}
.spin-button .spin-value input[type="text"],
.spin-button .spin-value input[type="number"] {
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: unset;
  box-shadow: none;
  text-align: center;
  border: unset;
}

.spin-button .spin-value input[type="text"]:focus,
.spin-button .spin-value input[type="number"]:focus {
  outline: none;
}

.spin-button .spin-value input[type="number"]::-webkit-inner-spin-button,
.spin-button .spin-value input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

.spin-button .spin-value > label {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.spin-button .btn-negative,
.spin-button .btn-positive {
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  flex: 0;
}
.spin-button .btn-negative:hover,
.spin-button .btn-positive:hover,
.spin-button .btn-negative:focus,
.spin-button .btn-positive:focus {
  background: #0053ba;
}
.spin-button .btn-negative:focus,
.spin-button .btn-positive:focus {
  outline: none;
}
.spin-button .btn-negative:active,
.spin-button .btn-positive:active {
  transform: scale(0.99);
}
.spin-button .btn-negative svg,
.spin-button .btn-positive svg {
  fill: #ffffff;
}
.spin-button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.spin-button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
