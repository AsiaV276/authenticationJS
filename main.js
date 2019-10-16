class View {
    constructor() {

        this.app = this.getElement('#root')

        this.title = this.createElement('h1')
        this.title.textContent = 'Sign in'

        this.form = this.createElement('form')

        this.emailInput = this.createElement('input')
        this.emailInput.type = 'email'
        this.emailInput.placeholder = 'username or Email Address'
        this.emailInput.required = true
        this.pwInput = this.createElement('input')
        this.pwInput.type = 'password'
        this.pwInput.placeholder = 'Password'

        this.submitButton = this.createElement('button')
        this.submitButton.textContent = 'Submit'

        this.form.append(this.emailInput, this.pwInput, this.submitButton)
        this.app.append(this.title, this.form)
    }
}