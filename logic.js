function warrantyPage() {
let header = document.createElement('h2')
header.innerHTML ="Warranty Page"
document.body.appendChild(header)

let first = document.createElement('label')
first.innerHTML = 'First Name'
document.body.appendChild(first)
let firstInput = document.createElement('input')
firstInput.setAttribute = ('type', 'text')
document.body.appendChild(firstInput)


let last = document.createElement('label')
last.innerHTML ='Last Name'
document.body.appendChild(last)
let lastInput = document.createElement('input')
lastInput.setAttribute('type', 'text')
document.body.appendChild(lastInput)


let company = document.createElement('label')
company.innerHTML ='Company Name'
document.body.appendChild(company)
let companyInput = document.createElement('input')
companyInput.setAttribute('type', 'text')
document.body.appendChild(companyInput)


let email= document.createElement('label')
email.innerHTML ='Email'
document.body.appendChild(email)
let emailInput = document.createElement('input')
emailInput.setAttribute('type', 'text')
document.body.appendChild(emailInput)


let phoneNumber= document.createElement('label')
phoneNumber.innerHTML ='Phone Number'
document.body.appendChild(phoneNumber)
let phoneNumberInput = document.createElement('input')
phoneNumberInput.setAttribute('type', 'tel+')
document.body.appendChild(phoneNumberInput)

let faxNumber= document.createElement('label')
faxNumber.innerHTML ='Fax Number'
document.body.appendChild(faxNumber)
let faxNumberInput = document.createElement('input')
faxNumberInput.setAttribute('type', 'tel+')
document.body.appendChild(faxNumberInput)


let addy= document.createElement('label')
addy.innerHTML ='Address'
document.body.appendChild(addy)
let addyInput = document.createElement('input')
addyInput.setAttribute('type', 'text')
document.body.appendChild(addyInput)

let city= document.createElement('label')
city.innerHTML ='City'
document.body.appendChild(city)
let cityInput = document.createElement('input')
cityInput.setAttribute('type', 'text')
document.body.appendChild(cityInput)

let state= document.createElement('label')
state.innerHTML ='State'
document.body.appendChild(state)
let stateInput = document.createElement('input')
stateInput.setAttribute('type', 'text')
document.body.appendChild(stateInput)

let zip= document.createElement('label')
zip.innerHTML ='Zip Code'
document.body.appendChild(zip)
let zipInput = document.createElement('input')
zipInput.setAttribute('type', 'text')
document.body.appendChild(zipInput)


let country= document.createElement('label')
country.innerHTML ='Country'
document.body.appendChild(country)
let countryInput = document.createElement('input')
countryInput.setAttribute('type', 'text')
document.body.appendChild(countryInput)

let device = document.createElement('h2')
device.innerHTML = 'Device Information'
document.body.appendChild(device)

let date = document.createElement('label')
date.innerHTML = 'Date of Purchase'
document.body.appendChild(date)
let deviceInput = document.createElement('input')
deviceInput.setAttribute = ('type', 'date')
document.body.appendChild(deviceInput)

let model = document.createElement('label')
model.innerHTML = 'Model'
document.body.appendChild(model)
let modelInput = document.createElement('input')
modelInput.setAttribute = ('type', 'number')
document.body.appendChild(modelInput)

let serialNumber = document.createElement('label')
serialNumber.innerHTML = 'Serial Number'
document.body.appendChild(serialNumber)
let serialNumberInput = document.createElement('input')
serialNumberInput.setAttribute = ('type', 'number')
document.body.appendChild(serialNumberInput)

let save = document.createElement('input')
save.setAttribute('type', 'button')
save.setAttribute('value', 'Save')
document.body.appendChild(save)

let close = document.createElement('input')
close.setAttribute('type', 'button')
close.setAttribute('value', 'Close')
document.body.appendChild(close)


}
