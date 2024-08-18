import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api";

async function addData (data){
    return (await axios.post('/requests', data)).data;
}

const formData = {
    email: "",
    comment: "",
}

const form = document.querySelector(".work-together-form");
const STORAGE_KEY = "form-state";

populateForm();

form.addEventListener("input", handleFormInput);
form.addEventListener("submit", handleClickBtnSend);

function handleFormInput(){
    formData.email = form.elements.email.value.trim();
    formData.comment = form.elements.comments.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

async function handleClickBtnSend(event){
    event.preventDefault();

    if(!formData.email || !formData.comment){
        iziToast.show({
            title: 'Caution',
            titleColor: '#FAFAFB',
            titleSize: '16px',
            titleLineHeight: '24px',
            position: 'topRight',
            maxWidth: '432px',
            message: 'Ops.. You forgot to write the keyword!',
            messageColor: '#FAFAFB',
            messageSize: '16px',
            messageLineHeight: ' 24px',
            backgroundColor: '#FFA000',
        });
    }

    try{
        await addData(formData);
        form.reset();
    }catch(err){
        iziToast.show({
            title: 'Error',
            titleColor: '#FAFAFB',
            titleSize: '16px',
            titleLineHeight: '24px',
            position: 'center',
            maxWidth: '432px',
            message: `An error occurred: ${err.message}`,
            messageColor: '#FAFAFB',
            messageSize: '16px',
            messageLineHeight: ' 24px',
            backgroundColor: '#EF4040',
        });
    }

    localStorage.removeItem(STORAGE_KEY);
}



function populateForm(){
    let savedFormData = {}

    try{
        savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    }catch(err){
        iziToast.show({
            title: 'Error',
            titleColor: '#FAFAFB',
            titleSize: '16px',
            titleLineHeight: '24px',
            position: 'center',
            maxWidth: '432px',
            message: `An error occurred: ${err.message}`,
            messageColor: '#FAFAFB',
            messageSize: '16px',
            messageLineHeight: ' 24px',
            backgroundColor: '#EF4040',
        });
        return;
    }

    if (!savedFormData){
        return;
    }

    form.elements.email.value = savedFormData.email;
    form.elements.comments.value = savedFormData.comment;
}