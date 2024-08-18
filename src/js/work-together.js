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
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const successMessage = document.querySelector(".success");
const errorMessage = document.querySelector(".error");
const emailInput = document.querySelector("input#email");

const currentEmail = document.querySelector(".current.work-together-label-email");
const currentComments = document.querySelector(".current.work-together-label-comments");

populateForm();

form.addEventListener("input", handleFormInput);
form.addEventListener("submit", handleClickBtnSend);

function handleFormInput(){
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    formData.email = form.elements.email.value.trim();
    formData.comment = form.elements.comments.value.trim();

    if (emailPattern.test(emailInput.value)) {
        successMessage.style.display = 'block';
        currentEmail.style.setProperty('--after-color', '#3CBC81');
    } else {
        errorMessage.style.display = 'block';
        currentEmail.style.setProperty('--after-color', '#E74A3B');
    }

    if(formData.comment){
        currentComments.style.setProperty('--after-color', 'rgba(250, 250, 250, 0.50)');
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

async function handleClickBtnSend(event){
    event.preventDefault();
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    document.documentElement.style.setProperty('--after-color', 'rgba(250, 250, 250, 0.20))');

    if(!formData.email || !formData.comment){
        iziToast.show({
            title: 'Caution',
            titleColor: '#FAFAFB',
            titleSize: '16px',
            titleLineHeight: '24px',
            position: 'topRight',
            maxWidth: '432px',
            message: 'Ops.. You have not filled in all the required fields in the form.',
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