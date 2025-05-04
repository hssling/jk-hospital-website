const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-app-password' // Replace with your app password
    }
});

// Appointment booking endpoint
app.post('/api/appointments', async (req, res) => {
    try {
        const { name, email, phone, department, doctor, date, time, message } = req.body;

        // Send email to hospital
        const mailOptions = {
            from: email,
            to: 'info@jkhospital.in',
            subject: 'New Appointment Request - JK Hospital',
            html: `
                <h2>New Appointment Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Department:</strong> ${department}</p>
                <p><strong>Doctor:</strong> ${doctor}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        // Send confirmation email to patient
        const patientOptions = {
            from: 'info@jkhospital.in',
            to: email,
            subject: 'Appointment Confirmation - JK Hospital',
            html: `
                <h2>Appointment Confirmation</h2>
                <p>Dear ${name},</p>
                <p>Thank you for booking an appointment with JK Hospital.</p>
                <p><strong>Department:</strong> ${department}</p>
                <p><strong>Doctor:</strong> ${doctor}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p>We will contact you shortly to confirm the details.</p>
                <p>Best regards,<br>JK Hospital Team</p>
            `
        };

        await transporter.sendMail(patientOptions);

        res.status(200).json({
            success: true,
            message: 'Appointment booked successfully! We will contact you shortly.'
        });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({
            success: false,
            message: 'Error booking appointment. Please try again later.'
        });
    }
});

// Department information endpoint
app.get('/api/departments', (req, res) => {
    const departments = [
        {
            id: 1,
            name: 'Cardiology',
            description: 'Specialized care for heart-related conditions',
            doctors: ['Dr. John Smith', 'Dr. Sarah Johnson']
        },
        {
            id: 2,
            name: 'Neurology',
            description: 'Expert care for neurological conditions',
            doctors: ['Dr. Michael Brown', 'Dr. Emily Wilson']
        },
        {
            id: 3,
            name: 'Orthopedics',
            description: 'Treatment for bone and joint issues',
            doctors: ['Dr. Robert Davis', 'Dr. Patricia Miller']
        },
        {
            id: 4,
            name: 'Dentistry',
            description: 'Comprehensive dental care services',
            doctors: ['Dr. James Taylor', 'Dr. Jennifer Anderson']
        }
    ];
    res.json(departments);
});

// Available time slots endpoint
app.get('/api/time-slots/:date', (req, res) => {
    const date = req.params.date;
    const timeSlots = [
        { time: '09:00 AM', available: true },
        { time: '10:00 AM', available: true },
        { time: '11:00 AM', available: true },
        { time: '02:00 PM', available: true },
        { time: '03:00 PM', available: true },
        { time: '04:00 PM', available: true }
    ];
    res.json(timeSlots);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
