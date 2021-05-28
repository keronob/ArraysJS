
document.getElementById('myform').addEventListener('submit',validateForm);

function  validateForm(event)
{
    event.preventDefault();
    event.stopPropagation();
    let myform = event.target;

    let fData = new FormData(myform)
        fData.append()


}