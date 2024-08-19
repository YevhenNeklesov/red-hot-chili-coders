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

const modalWindow = document.querySelector(".backdrop");
const modalBtnClose = document.querySelector(".work-together-modal-btn-x");


populateForm();
checkFormInput();

form.addEventListener("input", handleFormInput);
form.addEventListener("submit", handleClickBtnSend);

function checkFormInput(){
    if (emailPattern.test(emailInput.value)) {
        successMessage.style.display = 'block';
        emailInput.style.borderBottomColor = '#3CBC81';
        errorMessage.style.display = 'none';
    }else {
        errorMessage.style.display = 'block';
        emailInput.style.borderBottomColor = '#E74A3B';
        successMessage.style.display = 'none';
    }

    if(!emailInput.value){
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
        emailInput.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)';
    }
    if(commentsInput.value){
        commentsInput.style.borderBottomColor = 'rgba(250, 250, 250, 0.50)';
    }else{
        commentsInput.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)';
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

    if(!emailInput.value.trim() || !commentsInput.value.trim()){
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
            close: 'true',
        });
    }

    try{
        await addData(formData);
        form.reset();
        localStorage.removeItem(STORAGE_KEY);
        modalWindow.classList.add("is-open");

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

modalBtnClose.addEventListener("click", function(){
    modalWindow.style.display = 'none';
})

window.addEventListener("click", function(event){
    if(event.target === modalWindow){
        modalWindow.style.display = 'none';
    }
})

window.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        modalWindow.style.display = 'none';
    }
})