const submitBtn = document.getElementById('submit-btn');


function getTheTime() {
    const event1 = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let first = event1.toLocaleDateString('en-gb', options)
    const getHours = event1.getHours();
    const getMinutes = event1.getMinutes();
    const colon = ':'
    const morning = 'am';
    const afternoon = 'pm';
    if (getMinutes < 10) {
        if (getHours < 12 && getHours < 10) {
            const finalTime = first + ' ' + '0' + getHours + colon + '0' + getMinutes;
            return console.log(finalTime + morning);
            
        } else if (getHours < 12) {
            const finalTime = first + ' ' + getHours + colon + '0' + getMinutes;
            return console.log(finalTime + morning);
        } else {
            const finalTime = first + ' ' + getHours + colon + '0' + getMinutes;
            return console.log(finalTime + afternoon);
        }
    } else {
        if (getHours < 12 && getHours < 10) {
            const finalTime = first + ' ' + '0' + getHours + colon + getMinutes;
            return console.log(finalTime + morning);   
        } else if (getHours < 12) {
            const finalTime = first + ' ' + getHours + colon + getMinutes;
            return console.log(finalTime + morning);

        } else {
            const finalTime = first + ' ' + getHours + colon + getMinutes;
            return console.log(finalTime + afternoon);

        }

    }

}

getTheTime();

function fetchPosts() {
    fetch('http://localhost:5000/api/posts/career')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(result => {
        result.forEach(each => {
            let container = document.createElement('div');
            container.style.display = "flex";
            container.style.flexDirection = 'column';
            container.style.border = "1px solid black";
            let titleBox = document.createElement('div');
            titleBox.textContent = each.title;
            let storyBox = document.createElement('div');
            storyBox.textContent = each.story;
            container.appendChild(titleBox);
            container.appendChild(storyBox);
            let postBox = document.getElementById('posts');
            postBox.insertAdjacentElement('afterbegin', container);
        })});

}

fetchPosts();




submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const titleData = document.getElementById('title-input').value;
    const categoryData = document.getElementById('category-input').value;  
    const storyData = document.getElementById('story-input').value;
    let newObject = {
        title: titleData,
        category: categoryData,
        story: storyData,
    }
    await fetch('http://localhost:5000/api/posts/career', {
        method: 'POST',
        body: JSON.stringify(newObject), 
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    .then(response => console.log(response));
})
    