
var categorySelector = document.querySelectorAll('section.categories.top>.category');


var showCategory = function (id){
    document.querySelectorAll(".sweet.block").forEach(element => {
        element.classList.remove('visible');
    })
    setTimeout(function (){
        document.querySelectorAll(".sweet.block").forEach(element => {
            element.classList.add('enable');
        })
        if (id == "all"){
            document.querySelectorAll(".sweet.block").forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })
        }
        else if (id == "usa"){
            document.querySelectorAll(".sweet.block."+id).forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })
        }
        else if (id == "japan"){
            document.querySelectorAll(".sweet.block."+id).forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })
        }
        else if (id == "europe"){
            document.querySelectorAll(".sweet.block."+id).forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })
        }
        else if (id == "chocolate"){
            document.querySelectorAll(".sweet.block."+id).forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })
        }
        else if (id == "marmalade"){
            document.querySelectorAll(".sweet.block."+id).forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })

        }
        else if (id == "gum"){
            document.querySelectorAll(".sweet.block."+id).forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })

        }
        else if (id == "candy"){
            document.querySelectorAll(".sweet.block."+id).forEach(element => {
                element.classList.remove('enable');
                element.classList.add('visible');
            })

        }
    }, 200)
}

showCategory('all');

categorySelector.forEach( function (element){
    element.addEventListener('click', function (){
        if (element.classList.contains('selected')) return;
        categorySelector.forEach(function (e){
            e.classList.remove('selected')
        })
        showCategory(element.getAttribute('id'))
        element.classList.add('selected')

    })
})

var addBasketEls = document.querySelectorAll('.info.sweet>.add')

addBasketEls.forEach(function (e){
    e.innerHTML = "В корзину"
})
