const information = document.getElementById('information')
const horizontalShadow = document.getElementById('horizontalShadow')
const verticalShadow = document.getElementById('verticalShadow')
const blurRadius = document.getElementById('blurRadius')
const spreadRadius = document.getElementById('spreadRadius')
const shadowColor = document.getElementById('shadowColor')
const shadowColorOpacity = document.getElementById('shadowColorOpacity')
const insetShadow = document.getElementById('insetShadow')
const boxShadow = document.getElementById('boxShadow')

const setTextarea = () => {

    const hexToRgb = (hex, a) => {
        const r = parseInt(hex.slice(1, 3), 16)
        const g = parseInt(hex.slice(3, 5), 16)
        const b = parseInt(hex.slice(5, 7), 16)
        return `rgba(${r},${g},${b},${a})`
    }
    information.innerText = `Box shadow: ${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px ${spreadRadius.value}px ${hexToRgb(shadowColor.value, shadowColorOpacity.value)}`
}

const changeShadow = () => {

    const hexToRgb = (hex, a) => {
        const r = parseInt(hex.slice(1, 3), 16)
        const g = parseInt(hex.slice(3, 5), 16)
        const b = parseInt(hex.slice(5, 7), 16)
        return `rgba(${r},${g},${b},${a})`
    }

    if (insetShadow.checked) {

        information.innerText = `Box shadow: inset ${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px ${spreadRadius.value}px ${hexToRgb(shadowColor.value, shadowColorOpacity.value)}`

        boxShadow.style.boxShadow = `inset ${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px ${spreadRadius.value}px ${hexToRgb(shadowColor.value, shadowColorOpacity.value)}`

    } else {
        
        information.innerText = `Box shadow: ${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px ${spreadRadius.value}px ${hexToRgb(shadowColor.value, shadowColorOpacity.value)}`

        boxShadow.style.boxShadow = `${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px ${spreadRadius.value}px ${hexToRgb(shadowColor.value, shadowColorOpacity.value)}`
    }

    

}