const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Project Tracking Application</h1>

        <h2>Project Details</h2>

        <table border="1" cellpadding="10">

        <tr>
            <th>Project</th>
            <th>Status</th>
        </tr>

        <tr>
            <td>Website Development</td>
            <td>Completed</td>
        </tr>

        <tr>
            <td>Mobile App</td>
            <td>In Progress</td>
        </tr>

        <tr>
            <td>Database Design</td>
            <td>Pending</td>
        </tr>

        </table>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});