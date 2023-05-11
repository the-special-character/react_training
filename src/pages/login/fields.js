import TextInput from '../../components/textInput'

export default [
  {
    name: 'email',
    defaultValue: '',
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Please Provide valid email address',
      },
    },
    component: TextInput,
    extraProps: {
      type: 'email',
      label: 'Email',
      autoComplete: 'email',
    },
  },
  {
    name: 'password',
    defaultValue: '',
    rules: {
      required: 'Password is required',
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        message: 'Please Provide valid Password',
      },
    },
    component: TextInput,
    extraProps: {
      type: 'password',
      label: 'Password',
      autoComplete: 'current-password',
    },
  },
]
