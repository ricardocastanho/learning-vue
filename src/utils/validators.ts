export const validateEmail = (value: string): boolean | string => {
  if (!value) {
    return '* Este campo é obrigatório'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  return isValid || '*Este campo precisa ser um e-mail'
}

export const validatePassword = (value: string): boolean | string => {
  if (!value) {
    return '* Este campo é obrigatório'
  }

  if (value.length < 8) {
    return '* Este campo precisa de no mínimo 8 caracteres'
  }

  return true
}
