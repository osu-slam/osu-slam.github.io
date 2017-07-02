$(function() {
    var allProjects = [];
    var Project = makeStruct("title img modalID");

    /* Add projects */

    allProjects.push(new Project('Rhythm Video Game Therapy for Chronic Aphaisa', 'img/portfolio/drum.jpg', '#portfolioModal5'));

    allProjects.push(new Project('Music-Based Intervention Program for School-Age Children', 'img/portfolio/kids-girl-pencil-drawing-159823.jpg', '#portfolioModal4'));

    allProjects.push(new Project('Non-Invasive Rhythm Stimulation for Parkinson’s Disease Patients', 'img/portfolio/emotional-50309_640.jpg', '#portfolioModal3'));

    allProjects.push(new Project('Changes in Neural Activity Following Cochlea Implant (CI)', 'img/portfolio/Synapse_in_brain.jpg', '#portfolioModal2'));

    allProjects.push(new Project('Rhythm and Speech Perception', 'img/portfolio/pexels-photo-28317.jpg', '#portfolioModal1'));

    /* End of add projects */

    var base = document.getElementById('projects').children;
    var newRow;

    for (var i = 0; i < allProjects.length; i++) {
        if (i % 3 == 0) {
            newRow = document.createElement("div");
            newRow.className += 'row';
            base[0].appendChild(newRow);
        }

        var newCol = document.createElement("div");
        newCol.className += 'col-md-4 col-sm-6 portfolio-item';

            var link = document.createElement("a");
            link.setAttribute('href', allProjects[i].modalID);
            link.setAttribute('data-toggle', 'modal');
            link.className += 'portfolio-link';

                var portfolioWrap = document.createElement("div");
                portfolioWrap.className += 'portfolio-hover';

                    var contentWrap = document.createElement("div");
                    contentWrap.className += 'portfolio-hover-content';

                        var icon = document.createElement("i");
                        icon.className += 'fa fa-plus fa-3x';
                        contentWrap.appendChild(icon);

                    portfolioWrap.appendChild(contentWrap);

                link.appendChild(portfolioWrap);

                var image = document.createElement('img');
                image.setAttribute('src', allProjects[i].img);
                image.className += 'img-responsive';
                link.appendChild(image);

            newCol.appendChild(link);

                var caption = document.createElement("div");
                caption.className += 'portfolio-caption';

                var newTitle = document.createElement("h4");
                newTitle.textContent = allProjects[i].title;
                caption.appendChild(newTitle);

            newCol.appendChild(caption);

        newRow.appendChild(newCol);
    }
});

function makeStruct(names) {
    var names = names.split(' ');
    var count = names.length;
    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}