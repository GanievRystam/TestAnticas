function formValidation () {
  const form = document.querySelector('[data-form]');
  const nameInput = form.querySelector('[data-name]');
  const emailInput = form.querySelector('[data-email]');
  const zipInput = form.querySelector('[data-zip]');
  const lastNameInput = form.querySelector('[data-last-name]');
  form.addEventListener('submit', (evt) => {

    evt.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const zip = zipInput.value;
    const lastName = lastNameInput.value;
    if (!name || !email || !zip || !lastName) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    if (!isValidLogin(name)) {
      alert('Логин может содержать только буквы на латинице и цифры');
      return;
    }
    
    if (!isValidateEmail(email)) {
      alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
      return;
    }
    form.submit();
  });

  function isValidLogin(name) {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(name);
  }

  function isValidateEmail (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
}
formValidation ()