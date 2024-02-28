<script setup lang="ts">
  import { ElDialog, ElButton } from 'element-plus'

  interface Props {
    visible: boolean
    close?: () => void
    confirm?: (data: number) => void
  }
  const props = defineProps<Props>()

  const emits = defineEmits(['update:visible'])
  const submitForm = async () => {
    props.confirm?.(1)
    handleClose()
  }

  const handleClose = () => {
    emits('update:visible', false)
    props.close?.()
  }
</script>

<template>
  <el-dialog :model-value="visible">
    <slot name="count"></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="submitForm"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped></style>
