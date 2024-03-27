// export function formhandle() {

const  form = () => {document.querySelector('form')}
        nextBtn = () => { form.querySelector('.nextBtn')},
        backBtn = () => { form.querySelector('.backBtn')},
        allInput = () => { form.querySelectorAll('.form1 input')}
    
    nextBtn.addeventListener('click', () =>{
        allInput.forEach(input => {
            if(input.value != ''){
                form.classList.add('setActive')
            }else{
                form.classList.remove('setActive')
                alert('Please fill all the field')
            }
        })
    }

)


// const  form =document.querySelector('form'),
//         nextBtn = form.querySelector('.nextBtn'),
//         backBtn = form.querySelector('.backBtn'),
//         allInput = form.querySelectorAll('.form1 input');
    
//     nextBtn.addeventListener('click', () =>{
//         allInput.forEach(input => {
//             if(input.value != ''){
//                 form.classList.add('setActive');
//             }else{
//                 form.classList.remove('setActive');
//                 alert('Please fill all the field');
//             }
//         })
//     })