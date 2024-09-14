const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const test_url = "https://www.jeevandip.com/wp-content/uploads/2021/08/RESPICURE-LS-SERUP-0.jpg"

app.get('/', (req,res)=> {
    res.send(`<img src = ${test_url}>`)
})
const get_image_binary_buffer = async () => {
    try {
        const response = await axios({
            url: test_url,
            method: 'GET',
            responseType: 'arraybuffer',
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching image:', error)
    }
}

get_image_binary_buffer();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


