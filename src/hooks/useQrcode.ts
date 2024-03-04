import { type Ref } from 'vue'
import { ref, watch, unref } from 'vue'
import QRCode from 'qrcode'

export const useQrcode = (str: Ref<string>) => {
  const qrCodeUrl = ref('')

  watch(str, async (newValue) => updateQrcode(newValue))

  const updateQrcode = async (str: Ref<string> | string) => {
    if (!str) return
    qrCodeUrl.value = await QRCode.toDataURL(unref(str), {
      margin: 0,
      color: {
        dark: '#ffffff',
        light: '#6B9A9E'
      },
      errorCorrectionLevel: 'L'
    })
  }

  updateQrcode(str)
  return [qrCodeUrl, updateQrcode] as const
}
