<script setup lang="ts">
  const visible = defineModel({ default: false })
  const handleConfrim = () => {
    visible.value = false
  }

  const handleCancel = () => {
    visible.value = false
  }
</script>

<template>
  <el-dialog v-model="visible">
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button type="primary" @click="handleConfrim"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped></style>
