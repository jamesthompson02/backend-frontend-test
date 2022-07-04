const submitBtn = document.getElementById('submit-btn');

const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('en-gb', options));


submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const titleData = document.getElementById('title-input').value;
    console.log(titleData);
    const categoryData = document.getElementById('category-input').value;
    const storyData = document.getElementById('story-input').value;
    // await axios.post('http://localhost:5000/api/posts/career', 
    // {
    // title: titleData,
    // category: categoryData,
    // story: storyData
    // }
    // )
    await fetch('http://localhost:5000/api/posts/career', {
        method: 'POST',
        headers: {
            // 'Access-Control-Allow-Origin': 'http://localhost:5000/api/posts/career',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleData,
            category: categoryData,
            story: storyData,
        })
    })
    .then(response => console.log(response));
})
    