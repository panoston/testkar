<template>
    <button :type="type" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'mode']
}
</script>

<style scoped>
button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #00A0E0;
    border: 1px solid #00A0E0;
    color: white;
    cursor: pointer;
    /* position: relative; */
    left: 160x;
    border-radius: 4px;
    transition: all 0.2s;
    display: inline-block;
    width: 165px;
    margin: 10px;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>