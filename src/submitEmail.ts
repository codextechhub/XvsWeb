import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT
const TEMPLATE_DEMO = import.meta.env.VITE_EMAILJS_TEMPLATE_DEMO
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function submitEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const form = event.currentTarget
  let valid = true
  form.querySelectorAll<HTMLInputElement>('input').forEach(input => {
    const check = (input as HTMLInputElement & { _check?: (force: boolean) => boolean })._check
    if (check && !check(true)) valid = false
  })
  if (!form.reportValidity() || !valid) return

  const isDemoForm = form.hasAttribute('data-demo-form')
  const templateId = isDemoForm ? TEMPLATE_DEMO : TEMPLATE_CONTACT

  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]')
  const status = form.querySelector<HTMLElement>('[data-status]')
  const originalLabel = submitButton?.textContent ?? ''
  const originalStatus = status?.textContent ?? ''

  if (submitButton) {
    submitButton.disabled = true
    submitButton.textContent = 'Sending…'
  }
  if (status) status.textContent = ''

  emailjs.sendForm(SERVICE_ID, templateId, form, { publicKey: PUBLIC_KEY })
    .then(() => {
      form.reset()
      if (submitButton) submitButton.textContent = 'Sent — thank you'
      if (status) {
        status.textContent = 'Thanks — your message is on its way to our team.'
        status.style.color = '#16A34A'
      }
      window.setTimeout(() => {
        if (submitButton) {
          submitButton.disabled = false
          submitButton.textContent = originalLabel
        }
        if (status) {
          status.textContent = originalStatus
          status.style.color = ''
        }
      }, 4000)
    })
    .catch((error) => {
      console.error('EmailJS error', error)
      if (submitButton) {
        submitButton.disabled = false
        submitButton.textContent = originalLabel
      }
      if (status) {
        status.textContent = 'Something went wrong sending your message. Please email info@codexng.com directly.'
        status.style.color = '#A81E1E'
      }
    })
}
