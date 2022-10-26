export class passwordValidations {
    static passwordIsValid(control) {
        if (control.value !== 'datdat')
            return { pwValid: true };
        return null;
    }
    static checkPassword(control) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value == 'datdat') {
                    resolve({ matchOldPassword: true });
                }
                else
                    resolve(null);
            }, 2000);
        });
    }
    static confirmPassword(control) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        console.log(newPassword.value, confirmPassword.value);
        if (newPassword.value !== confirmPassword.value) {
            console.log('confirm password');
            return { confirmPasswordInvalid: true };
        }
        return null;
    }
}
//# sourceMappingURL=password.validators.js.map