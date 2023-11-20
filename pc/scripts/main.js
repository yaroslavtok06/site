document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.querySelector('.open-modal');
    var closeModalBtn = document.querySelector('#closeModal');
    var modal = document.querySelector('#myModal');
  
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.querySelector('.open-modal2');
    var closeModalBtn = document.querySelector('#closeModal');
    var modal = document.querySelector('#myModal');
  
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  

  //contact modal

  function openModal() {
    document.getElementById('contactsModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactsModal').style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('contactsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};