function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let telpon = document.getElementById("telpon").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    let emailReceiver = `dicki.syaf@gmail.com`

    let a = document.createElement(`a`)
    a.href = `mailto:${emailReceiver}?Subject=${subject}&body=Hi, my name is ${name},
    ${message} Please reach me on ${telpon}`

    console.log(a);
    a.click()
}