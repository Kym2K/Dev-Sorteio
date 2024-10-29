function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-2").value)
    const max = Math.floor(document.querySelector(".input").value)

    if (min >= max) {

       alert("o valor minimo não pode ser maior que o maximo")
    }
    
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
  
    alert(result)
    }
}