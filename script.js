const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup();

smallCups.forEach((cup,idx) => {
    // console.log(idx)
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    // console.log(idx)
    
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        // console.log(idx)
        idx--;
    }


    smallCups.forEach((cup,idx2) => {
        // idx2 starts from 0 and goes till idx because in idx2 we are iterating in cups from 0 and in idx we are checking where we click and compare these two//
        if(idx2 <= idx){
            // console.log(idx2,idx)
            cup.classList.add('full')
        }else{
            // console.log(idx2,idx)
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    // console.log(fullCups,totalCups)


    //if percentage div is empty then we dont want to show it anything
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height =  `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
}