// Функція перевірки валідності форми
function validateForm() {
    const regexFullName = /^[А-Яа-яA-Za-z]+\s[А-Яа-яA-Za-z]\.[А-Яа-яA-Za-z]\.$/;
    const regexPhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const regexIdCard = /^[A-Za-z]{2}\s№\d{6}$/;
    const regexBirthDate = /^\d{2}\.\d{2}\.\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const inputs = [
      { id: 'fullName', regex: regexFullName, label: 'ПІБ' },
      { id: 'phone', regex: regexPhone, label: 'Телефон' },
      { id: 'idCard', regex: regexIdCard, label: 'ID-карта' },
      { id: 'birthDate', regex: regexBirthDate, label: 'Дата народження' },
      { id: 'email', regex: regexEmail, label: 'E-mail' }
    ];
  
    let allValid = true;
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
  
    inputs.forEach(input => {
      const element = document.getElementById(input.id);
      if (input.regex.test(element.value)) {
        element.classList.remove('error');
      } else {
        element.classList.add('error');
        allValid = false;
      }
    });
  
    if (allValid) {
      inputs.forEach(input => {
        const value = document.getElementById(input.id).value;
        resultContainer.innerHTML += `${input.label}: ${value}\n`;
      });
    } else {
      alert('Будь ласка, перевірте введені дані.');
    }
  }
  
  // Створення таблиці
  const variant = 4;
const table = document.getElementById('table');
const colorPicker = document.getElementById('colorPicker');

// Генерація таблиці
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        const number = i * 6 + j + 1;
        cell.textContent = number;

        if (number === variant) {
            cell.classList.add('active');
            
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            });

            cell.addEventListener('click', () => {
                cell.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener('dblclick', () => {
                for (let k = 0; k < 6; k++) {
                    const diagCell = table.rows[k].cells[5 - k];
                    diagCell.classList.add('diagonal');
                    diagCell.style.backgroundColor = colorPicker.value;
                }
            });
        }

        row.appendChild(cell);
    }
    table.appendChild(row);
}
