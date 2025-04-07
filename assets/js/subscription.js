const Basic = document.querySelector('.blocks  .supscriptions .sup_item1');
const Standard = document.querySelector('.blocks  .supscriptions .sup_item2');
const Premium = document.querySelector('.blocks  .supscriptions .sup_item3');
const BasicPlan = document.querySelector('.blocks .Basic');
const StandardPlan = document.querySelector('.blocks .Standard');
const PremiumPlan = document.querySelector('.blocks .Premium');
Basic.addEventListener('click', (e) => {
    if (BasicPlan.classList.contains('d-none')) {
        BasicPlan.classList.remove('d-none');
        Basic.classList.add('active');
        StandardPlan.classList.add('d-none');
        Standard.classList.remove('active');
        PremiumPlan.classList.add('d-none');
        Premium.classList.remove('active');
    } else { }
});
Standard.addEventListener('click', (e) => {
    if (StandardPlan.classList.contains('d-none')) {
        StandardPlan.classList.remove('d-none');
        Standard.classList.add('active');
        BasicPlan.classList.add('d-none');
        Basic.classList.remove('active');
        PremiumPlan.classList.add('d-none');
        Premium.classList.remove('active');
    } else { }
});
Premium.addEventListener('click', (e) => {
    if (PremiumPlan.classList.contains('d-none')) {
        PremiumPlan.classList.remove('d-none');
        Premium.classList.add('active');
        StandardPlan.classList.add('d-none');
        Standard.classList.remove('active');
        BasicPlan.classList.add('d-none');
        Basic.classList.remove('active');
    } else { }
});