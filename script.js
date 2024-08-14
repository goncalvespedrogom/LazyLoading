const imagens = document.querySelectorAll(".imagem-container img")

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        const imagem = entry.target

        imagem.src = imagem.src.replace("&w=10", "&w=2070");

        observer.unobserve(imagem);
    })
}, {})

imagens.forEach((imagem) => {
    observer.observe(imagem);
});