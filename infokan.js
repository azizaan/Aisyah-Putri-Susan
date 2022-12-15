// const scriptURL = 'https://script.google.com/macros/s/AKfycbwBRa_nNNzWEEicd6BSMls63wpHkEKVcV5W27K1o_2usVQvOEd7-PdvDJbyvMFgxNM6/exec'
// const form = document.forms['contact-me-portofolio']
// const btnKirim = document.querySelector('.btn-kirim');
// const btnLoading = document.querySelector('.btn-loading');
// const myAlert = document.querySelector('.my-alert');

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   btnLoading.classList.toggle('d-none');
//   btnKirim.classList.toggle('d-none');
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//       btnLoading.classList.toggle('d-none');
//       btnKirim.classList.toggle('d-none');
//       myAlert.classList.toggle('d-none');
//       form.reset();
//       console.log('Success!', response)
//     })
//     .catch(error => console.error('Error!', error.message))
// })
function validasi()  {
  var cek = document.forms["formku"]["teks"].value;
  var cek2 = document.forms["formku"]["NIK"].value;
  var cek3 = document.getElementById("email").value;
  var ekspresi=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (!/^[a-z A-Z]+$/.test(cek)) {
      alert("Kolom Nama harus diisi dengan huruf!");
      document.getElementById("teks").focus();
      return false;
  }
  else if (!/^[0-9]+$/.test(cek2)) {
    alert("Kolom NIK harus diisi dengan angka!");
    document.getElementById("NIK").focus();
  }
  else if (cek3==""||ekspresi.test(cek3)==false)
  {
  alert("Format email belum benar!");
  document.getElementById("email").focus();
  }
}