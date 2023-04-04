const pics = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
    'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',

    
  ]

  const gallery = document.querySelector('.portfolio')
  const picsBox = document.createElement('div')
  gallery.append(picsBox)
  pics.forEach(pic =>{
    const img = document.createElement('img')
    img.src = pic
    picsBox.appendChild(img)
    img.classList.add('img-item')

  })
  
  const modalBtn = document.querySelector('.contact')
  const modalWindow = document.querySelector('.modal_window')
  const openForm = document.querySelector('.modalform')
  modalBtn.addEventListener  ('click', ()=> {
    modalWindow.style.display = "flex"
    openForm.style.display = "flex"
  })

  const closeForm = document.querySelector('.xs')
  closeForm.addEventListener ('click',()=> {
    modalWindow.style.display = "none"
    openForm.style.display = "none"
    formAdd.reset()
  })

  modalWindow.addEventListener ('click',()=> {
    modalWindow.style.display = "none"
    openForm.style.display = "none"
    formAdd.reset()
  })

  const formAdd = document.querySelector('form')
  const sendMessage = document.querySelector('.message')

  sendMessage.addEventListener ('click', (e)=> {
    e.preventDefault();

    const name = formAdd.elements.name.value;
    const mail = formAdd.elements.mail.value;
    const aboutme = formAdd.elements.aboutme.value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${mail}`);
    console.log(`Info: ${aboutme}`);

    formAdd.reset()
  })

  const imgGallery = document.querySelectorAll('.img-item')
  for (let i=0; i < imgGallery.length; i++) {
    imgGallery[i].addEventListener('click', function() {
      const gallery = document.createElement('div')
      gallery.classList.add('photo-zoom')
      const openImg = document.createElement('img')
      openImg.setAttribute('src', this.getAttribute('src'))
      openImg.style.width = '50%'
      openImg.style.height = '500px'
      openImg.style.objectFit = 'cover'


      const closeBtn = document.createElement('button')
      closeBtn.classList.add('close-btn')
      closeBtn.textContent = 'close'
      closeBtn.style.width = '106px'
      closeBtn.style.height = '38px'
      closeBtn.addEventListener('click', function() {
        gallery.remove()
      })
      gallery.addEventListener('click', ()=> {
        gallery.remove()
      })
      gallery.appendChild(closeBtn)
      gallery.appendChild(openImg)
      document.body.append(gallery)
      console.log(openImg);
    });
  }