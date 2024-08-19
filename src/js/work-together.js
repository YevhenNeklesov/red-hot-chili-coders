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
const commentsInput = document.querySelector("input#comments");

populateForm();
checkFormInput();

form.addEventListener("input", handleFormInput);
form.addEventListener("submit", handleClickBtnSend);

function checkFormInput(){
    if (emailPattern.test(emailInput.value)) {
        successMessage.style.display = 'block';
        emailInput.style.borderBottomColor = '#3CBC81';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        emailInput.style.borderBottomColor = '#E74A3B';
        successMessage.style.display = 'none';
    }
    if(commentsInput.value){
        commentsInput.style.borderBottomColor = 'rgba(250, 250, 250, 0.50)';
    }
}

function handleFormInput(){

    formData.email = form.elements.email.value.trim();
    formData.comment = form.elements.comments.value.trim();

    checkFormInput();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

async function handleClickBtnSend(event){
    event.preventDefault();
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emailInput.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)';
    commentsInput.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)';

    if(!formData.email || !formData.comment){
        return iziToast.show({
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
            close: 'true',
        });
    }

    try{
        await addData(formData);
        form.reset();
        localStorage.removeItem(STORAGE_KEY);
        return iziToast.show({
            title: 'Thank you for your interest in cooperation!',
            titleColor: '#FAFAFA',
            titleSize: '20px',
            titleLineHeight: '30px',
            message: `The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.`,
            messageColor: 'rgba(250, 250, 250, 0.60)',
            messageSize: '16px',
            messageLineHeight: ' 24px',
            backgroundColor: '#1C1D20',
            position: 'center',
            maxWidth: '492px',
            progressBar: 'false',
            closeOnEscape: 'true',
            close: 'true',
        });

    }catch(err){
        return iziToast.show({
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
            backgroundColor: '#ED3B44',
            close: 'true',
        });
    }
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
            backgroundColor: '#ED3B44',
            close: 'true',
        });
        return;
    }

    if (!savedFormData){
        return;
    }

    form.elements.email.value = savedFormData.email;
    form.elements.comments.value = savedFormData.comment;
}