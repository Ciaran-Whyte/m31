speed_up = 1

function loadContent() {
    var beginButton = document.getElementById('begin_button');
    beginButton.style.display = 'none';
    var content = document.getElementById('content');
    content.style.display = 'block';

    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 30,
        deleteSpeed: 5,
    });

    typewriter
        .pauseFor(500)
        .callFunction(() => {
            document.getElementById('music').innerHTML = '<audio id="opening" src="audio/opening.mpg" type="audio/mpg" loop>Audio tag not supported</audio>';
            var x = document.getElementById("opening");
            x.play();
        })
        .pauseFor(2500)
        .typeString(`<i>Chancellor:</i>  "Citizens of the Union... It is finally time to breach the gap, to activate the deep-gate. `)
        .pauseFor(300)
        .typeString('On this historic date, the Union will make its next step.. no..')
        .pauseFor(500)
        .deleteChars(11)
        .typeString('<strong>leap</strong> into the great unknown.. ')
        .pauseFor(1000)
        .typeString('Witness the sacrifice of NC-167, as the Solar Spike beings its terrible work."')
        .pauseFor(1000)
        .callFunction(() => {
            document.getElementById('chancellor').classList = "hidden"
            document.getElementById('supernova').classList = 'fade-in-image';
        })
        .pauseFor(9000)
        .callFunction(() => {
            document.getElementById('supernova').classList = "hidden"
            document.getElementById('supernova-blast').classList = 'fade-in-image';
        })
        .typeString('<br\><br\><i>Chancellor:</i> "Worry not, for within the fires of destruction, we forge a way for our beloved Union to reach beyond. To grasp at new stars and worlds once denied to us by the 2.5 millions lightyears of cold dead space...."')
        .callFunction(() => {
            document.getElementById('supernova-blast').classList = 'hidden';
            document.getElementById('chancellor').classList = "fade-in-image"
        })
        .pauseFor(1000)
        .typeString('<br\><br\><i>Chancellor:</i> "With its dying light, NC-167 will ignite the DeepGate"')
        .start();

    sleep(40000 / speed_up).then(() => {
        document.getElementById('next').innerHTML = '<button type="button" class="button button_next" id="continue_button" onclick="loadP2()">Continue</button>';
    });
}

function loadP2() {
    let content = document.getElementById('content');
    document.getElementById('content').classList = 'fade-out-image';
    sleep(2500).then(() => {
        content.style.display = 'none';
        document.getElementById('content_002').classList = 'fade-in-image';
    })
    var app_002 = document.getElementById('app_002');

    var typewriter_002 = new Typewriter(app_002, {
        loop: false,
        delay: 30,
        deleteSpeed: 5,
    });

    typewriter_002
        .pauseFor(5000)
        .typeString(`<i>Chancellor:</i>  "The Unions flagship 'Nova prospectus' will be manned by over 100,000 Union souls. Filled with the brightest minds that the Union has produced. The crew aboard 'Nova prospectus' will mainly comprise of specialists from the fields of Science, Military, Mining as well as the required supporting staff."`)
        .pauseFor(500)
        .typeString('<br\><br\><i>Chancellor:</i> "Once arrived, the crew of Nova prospectus will establish a base of operations. This base will allow the mining crews time to extract the necessary material to construct a worm-whole relay node. Allowing sustainable access back and forth to the M31 galaxy."')
        .pauseFor(500)
        .typeString(`<br\><br\><i>Chancellor:</i> "For one to truly grasp the magnitude of this endeavour, it is important to have a fundamental concept of scale... at the galactic level. The size of our home galaxy is a mere 52 thousand light years across. Yet it has been our cradle and prison for all of recorded time. Now that the Union has reached the Milky Way's edge, we find ourselves looking at once thought to be impassible distances. Counted in the millions, our nearest neighbor lies a staggering 2.5 million years away."`)
        .start();

    sleep(50000 / speed_up).then(() => {
        document.getElementById('next_002').innerHTML = '<button type="button" class="button button_next" id="continue_button_002" onclick="loadP21()">Continue</button>';
    });
}

function loadP21() {
    document.getElementById('continue_button_002').remove();
    document.getElementById('spaceship').classList = 'fade-out-image';
    sleep(2500).then(() => {
        document.getElementById('spaceship').style.display = 'none';
        document.getElementById('localgroup').classList = 'fade-in-image';
    })
    sleep(30000 / speed_up).then(() => {
        document.getElementById('next_002').innerHTML = '<button type="button" class="button button_next" id="continue_button_002" onclick="loadP3()">Continue</button>';
    });

}

function loadP3() {
    var app_002 = document.getElementById('app_002');
    document.getElementById('app_002').innerHTML = '';
    document.getElementById('continue_button_002').remove();

    var typewriter_002 = new Typewriter(app_002, {
        loop: false,
        delay: 30,
        deleteSpeed: 5,
    });

    typewriter_002
        .pauseFor(2000)
        .typeString(`<i>Chancellor:</i>  "Now we come to the moment of truth.. ".`)
        .pauseFor(300)
        .typeString(`<br\><br\><i>Chancellor:</i> "After decades of construction and planning, watch as 'Nova prospectus' makes its final approach towards the Deep-Gate"`)
        .typeString('<br\><br\><i>Chancellor:</i> "The future of this great Union rests on the success of this mission. Godspeed and a safe passage across the expanse!"')
        .start();

    sleep(30000 / speed_up).then(() => {
        document.getElementById('next_002').innerHTML = '<button type="button" class="button button_next" id="continue_button" onclick="loadP4()">Continue</button>';
    });
}

function loadP4() {
    document.getElementById('content_002').innerHTML = '';
    document.getElementById('cockpit_gif').classList = 'fade-in-image';
    var app_003 = document.getElementById('app_003');
    var typewriter_003 = new Typewriter(app_003, {
        loop: false,
        delay: 30,
        deleteSpeed: 5,
    });

    sleep(8000).then(() => {
        document.getElementById('cockpit_gif').classList = 'hidden';
        document.getElementById('cockpit_see_through').classList = '';
        app_003.classList = 'text';
    });

    typewriter_003
        .pauseFor(8000)
        .typeString(`<i>Chancellor:</i>"Welcome aboard the bridge on the Nova".`)
        .pauseFor(300)
        .typeString(`<br\><br\><i>Chancellor:</i> "The crew are remained sedated in their status tanks. The voyage to M31 will be piloted by the ships AI systems."`)
        .pauseFor(300)
        .typeString(`<br\><br\><i>Chancellor:</i> "The DeepGate will appear without warning"`)
        .start();

    sleep(18000 / speed_up).then(() => {
        app_003.innerHTML="";
        document.getElementById('next_003').innerHTML = '<button type="button" class="button button_next" id="continue_button" onclick="loadP5()">Continue</button>';
    });
}