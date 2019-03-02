export const validations = {
	email: {
		presence: {
			message: 'Por favor ingrese su email'
		},
		format: {
			pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: 'Correo electrónico introducido con formato incorrecto'
		}
	},
	password: {
		presence: {
			message: 'Por favor ingrese una contraseña '
		}, length: {

		}
	}
}
export const validate = (nameField, value) => {
	let result = { isError: false, messageError: '' }
	if (validations.hasOwnProperty(nameField)) {
		let v = validations[nameField]
		if (value == '' || value === null) {
			result = { isError: true, messageError: v.presence.message }
		} else if (v.hasOwnProperty('format') && !v.format.pattern.test(value)) {
			result = { isError: true, messageError: v.format.message }
		} else {
			result.isError = false
		}
	} else {
		result.isError = false
	}
	return result
}