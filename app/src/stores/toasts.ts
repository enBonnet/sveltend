import { writable } from "svelte/store";

export type ToastTypes = 'info' | 'warning'| 'error'| 'success'

type ToastType = {
  id?: number,
  type?: ToastTypes,
  dismissible?: true,
  timeout?: number
}

export const toasts = writable<ToastType[]>([]);

export const dismissToast = (id: number) => {
  toasts.update((all) => all.filter((t) => t?.id !== id))
}

export const addToast = (toast: ToastType) => {
  const id = Math.floor(Math.random() * 1000);

  const newToast = Object.assign(
    {
      id,
      type: 'info',
      dismissible: true,
      timeout: 3000
    },
    toast
  );

  toasts.update((all) => [newToast, ...all])

  if (newToast.timeout) setTimeout(() => dismissToast(id), newToast.timeout)
}