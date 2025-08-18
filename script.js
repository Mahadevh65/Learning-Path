document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.cart-button').forEach((btn, index) => {
        btn.addEventListener('click', function () {
            document.getElementsByClassName('video')[0].style.display = 'none';
            document.getElementsByClassName('container')[0].style.display = 'none';
            document.getElementsByClassName('video')[1].style.display = 'none';

            backLink = document.getElementsByClassName('back-link')[index];
            backLink.addEventListener('click', function () {
                location.reload();
            })
            if (index === 0) {
                document.getElementById('web-roadmap').style.display = 'block';
                document.getElementsByClassName('container')[0].style.display = 'none';
                document.getElementsByClassName('web-video')[0].style.display = 'block';
                document.getElementsByClassName('video')[0].style.display = 'block';
            }

            else if (index === 1) {
                document.getElementById('app-roadmap').style.display = 'block';
                document.getElementsByClassName('video')[1].style.display = 'block';
                document.getElementsByClassName('app-video')[0].style.display = 'block';
                // document.getElementsByClassName('details')[0].style.display = 'none';
                
            }
            else if (index === 2) {
                // alert("wait i will back");
                document.getElementById('DataAnalysis-roadmap').style.display = 'block';
                document.getElementById('web-roadmap').style.display = 'none';
                // document.getElementsByClassName('app-video')[0].style.display = 'none';
                
            }

            else if (index === 3){
                document.getElementById('AIML-roadmap').style.display = 'block';
                // alert("Well COme Back");
            }
        });

    });
});
// Back to Home Page



document.addEventListener('DOMContentLoaded', function () {
    //const circle = document.getElementsByClassName('node-circle');
    //const list=document.getElementsByClassName('roadmap-details');
    const frontend = document.getElementById('frontend-list');
    const backend = document.getElementById('backend-list');
    const database = document.getElementById('Database-list');
    const version = document.getElementById('versionControl-list');
    
    //web Development
    document.querySelectorAll('g[web-node]').forEach((clr, index) => {
        clr.addEventListener('click', function () {
            document.getElementsByClassName('details')[0].style.display = 'flex';
            if (index === 0) {
                // clr.setAttribute('fill', 'green');
                frontend.classList.toggle('show');
                document.getElementsByClassName('web-video')[0].style.marginTop = '20px';

            }
            else if (index === 1) {
                // clr.setAttribute('fill', 'green');
                backend.classList.toggle('show');
            }

            else if (index === 2) {
                // clr.setAttribute('fill', 'green');
                database.classList.toggle('show');
            }

            else if (index === 3) {
                // clr.setAttribute('fill', 'green');
                version.classList.toggle('show');
            }

        })

    })

    //app Devlopment
    const appCircle = document.getElementsByClassName('app-circle');
    const applanguage = document.getElementById('app-Languages-list');
    const nativeapp = document.getElementById('native-app-list');
    const platformapp = document.getElementById('plateform-app-list');
    const backendapp = document.getElementById('backend-app-list');

    document.querySelectorAll('g[app-node]').forEach((appclr, index) => {

        appclr.addEventListener('click', function () {
            document.getElementsByClassName('app-details')[0].style.display = 'flex';
            if (index === 0) {
                //console.log("clicked");
                applanguage.classList.toggle('show');
            }
            else if (index === 1) {
                nativeapp.classList.toggle('show');
            }

            else if (index === 2) {
                platformapp.classList.toggle('show');
            }

            else if (index === 3) {
                backendapp.classList.toggle('show');
            }
        })

    })

    //Data Analysis
    const Databasiclist = document.getElementById('Data-basic-list');
    const handelDatalist = document.getElementById('Data-handling-list');
    const Datavisual = document.getElementById('Data-visualization-list');
    const advanceData = document.getElementById('Advance-Data-list');

    document.querySelectorAll('.data-circle').forEach((dataclr, index) => {
        dataclr.addEventListener('click', function () {
            document.getElementsByClassName('DataAnalysis-details')[0].style.display = 'flex';
            if (index === 0) {
                // alert("i am back");
                dataclr.setAttribute('fill', 'green')
                Databasiclist.classList.toggle('show');
            }

            else if (index === 1) {
                dataclr.setAttribute('fill', 'green');
                handelDatalist.classList.toggle('show');
            }

            else if (index === 2) {
                dataclr.setAttribute('fill', 'green');
                Datavisual.classList.toggle('show');
            }

            else if (index === 3) {
                dataclr.setAttribute('fill', 'green');
                advanceData.classList.toggle('show');
            }
        });
    });

    //AIML

    const basicAIML =document.getElementById('AIML-basic-list');
    const coreML =document.getElementById('ML-learn-list');
    const deepLearn = document.getElementById('Deep-learn-list');
    const AdvanceML = document.getElementById('Advance-ML-list');
    document.querySelectorAll('g[AIML-node').forEach((dataclr, index) => {
        dataclr.addEventListener('click', function () {
            document.getElementsByClassName('AIML-details')[0].style.display = 'flex';
            if (index === 0) {
                // alert("i am back");
                basicAIML.classList.toggle('show');
            }

            else if (index === 1) {
                coreML.classList.toggle('show');
            }

            else if (index === 2) {
                deepLearn.classList.toggle('show');
            }

            else if (index === 3) {
                AdvanceML.classList.toggle('show');
            }
        });
    });


})