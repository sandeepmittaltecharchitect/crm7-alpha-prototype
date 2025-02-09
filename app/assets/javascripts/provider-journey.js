//---CASE DISPOSAL--
// Select only one category from checkbox group

const category_1_checkbox = document.querySelectorAll(
    "input[name='case_disposal[category_1]']",
)
const category_2_checkbox = document.querySelectorAll(
    "input[name='case_disposal[category_2]']",
)

function selectOnlyOneCategory(event) {
    let elementName = event.target.name
    if (elementName === 'case_disposal[category_1]') {
        for (var checkbox of category_2_checkbox) {
            if (checkbox.checked) {
                checkbox.click()
                checkbox.checked = false
            }
        }
    } else if (elementName === 'case_disposal[category_2]') {
        for (var checkbox of category_1_checkbox) {
            if (checkbox.checked) {
                checkbox.click()
                checkbox.checked = false
            }
        }
    }
}
category_1_checkbox.forEach((input) => {
    input.addEventListener('change', selectOnlyOneCategory)
})
category_2_checkbox.forEach((input) => {
    input.addEventListener('change', selectOnlyOneCategory)
})

// ---CASE DETAILS---
// Show CRM8 upload section if relevant option selected
const case_details = document.querySelectorAll(
    "input[name='case_details[value]']",
)
const crm8_upload_section = document.getElementById('crm8-upload-section')
const case_remitted_section = document.getElementById('case-remitted-section')

function showHideCRM8Section(event) {
    let value = event.target.value
    if (value === 'there was an assigned counsel') {
        crm8_upload_section.classList.toggle('hidden')
    } else if (value === 'the case has been remitted') {
        case_remitted_section.classList.toggle('hidden')
    }
}
case_details.forEach((input) => {
    input.addEventListener('change', showHideCRM8Section)
})