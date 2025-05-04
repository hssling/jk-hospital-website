// Initialize Google Maps
function initMap() {
    // JK Hospital coordinates (please verify and update if needed)
    const location = { lat: 12.9716, lng: 77.5946 }; // Bangalore coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#7c93a3"},{"lightness": "0"},{"saturation": "0"},{"weight": "0.10"}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{"color": "#1d2c41"}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#1a354c"}]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#d59563"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#d59563"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#263c3f"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#6b9a76"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#38414e"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#212a37"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9ca5b3"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#746855"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#1f2835"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#f3d19c"}]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{"color": "#2f3948"}]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#d59563"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#17263c"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#515c6d"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#17263c"}]
            }
        ]
    });

    // Add marker for JK Hospital
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'JK Hospital',
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            scaledSize: new google.maps.Size(40, 40)
        }
    });

    // Add info window with more details
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align:center; padding:15px;">
                <h3>JK Hospital</h3>
                <p>10th Main Road, 10th Cross Road, 12th Main Road, 11th Main Road, Bangalore, Karnataka 560001</p>
                <p>Phone: +91 98765 43210</p>
                <p>Hours: Mon-Sun: 8:00 AM - 8:00 PM</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    // Add zoom controls
    const zoomControlDiv = document.createElement('div');
    const zoomControl = new ZoomControl(zoomControlDiv, map);
    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);

    function ZoomControl(controlDiv, map) {
        controlDiv.style.padding = '5px';
        
        const controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to zoom';
        controlDiv.appendChild(controlUI);

        const controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = '<b>+</b>';
        controlUI.appendChild(controlText);

        google.maps.event.addDomListener(controlUI, 'click', () => {
            const currentZoom = map.getZoom();
            map.setZoom(currentZoom + 1);
        });
    }
}

// Form handling
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Show success message
    alert('Thank you for your appointment request! We will contact you soon.');
    
    // Reset form
    form.reset();
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Department card animations
document.querySelectorAll('.department-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Facility card animations
document.querySelectorAll('.facility-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Testimonial Slider
const slider = document.querySelector('.testimonials-slider');
const slides = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

if (prevButton && nextButton) {
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
}

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Department dropdown functionality
async function loadDepartments() {
    try {
        const response = await fetch('/api/departments');
        const departments = await response.json();
        
        const departmentSelect = document.getElementById('department');
        if (departmentSelect) {
            departments.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept.name;
                option.textContent = dept.name;
                departmentSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error loading departments:', error);
    }
}

// Load available time slots
async function loadTimeSlots(date) {
    try {
        const response = await fetch(`/api/time-slots/${date}`);
        const timeSlots = await response.json();
        
        const timeSelect = document.getElementById('time');
        if (timeSelect) {
            timeSelect.innerHTML = '';
            timeSlots.forEach(slot => {
                const option = document.createElement('option');
                option.value = slot.time;
                option.textContent = slot.time;
                if (!slot.available) {
                    option.disabled = true;
                }
                timeSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error loading time slots:', error);
    }
}

// Form submission with AJAX
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    // Load departments when page loads
    loadDepartments();

    // Handle department change
    const departmentSelect = document.getElementById('department');
    if (departmentSelect) {
        departmentSelect.addEventListener('change', async (e) => {
            const dateInput = document.getElementById('date');
            if (dateInput && dateInput.value) {
                await loadTimeSlots(dateInput.value);
            }
        });
    }

    // Handle date change
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.addEventListener('change', async (e) => {
            await loadTimeSlots(e.target.value);
        });
    }

    appointmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(appointmentForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            
            if (response.ok) {
                const successModal = document.createElement('div');
                successModal.className = 'success-modal';
                successModal.innerHTML = `
                    <div class="modal-content">
                        <h3>Appointment Booked Successfully!</h3>
                        <p>${result.message}</p>
                        <button class="close-modal">Close</button>
                    </div>
                `;
                document.body.appendChild(successModal);

                const closeModal = successModal.querySelector('.close-modal');
                closeModal.addEventListener('click', () => {
                    successModal.remove();
                    appointmentForm.reset();
                });

                // Auto close after 5 seconds
                setTimeout(() => {
                    successModal.remove();
                    appointmentForm.reset();
                }, 5000);
            } else {
                throw new Error(result.message || 'Failed to submit appointment');
            }
        } catch (error) {
            alert('Error submitting appointment. Please try again later.');
        }
    });
}

// Department cards functionality
document.querySelectorAll('.department-card').forEach(card => {
    card.addEventListener('click', async () => {
        const deptName = card.querySelector('h3').textContent;
        try {
            const response = await fetch('/api/departments');
            const departments = await response.json();
            
            const dept = departments.find(d => d.name === deptName);
            if (dept) {
                const modal = document.createElement('div');
                modal.className = 'dept-modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <h3>${deptName}</h3>
                        <p>${dept.description}</p>
                        <h4>Available Doctors:</h4>
                        <ul class="doctor-list">
                            ${dept.doctors.map(doc => `<li>${doc}</li>`).join('')}
                        </ul>
                        <button class="close-modal">Close</button>
                    </div>
                `;
                document.body.appendChild(modal);

                const closeModal = modal.querySelector('.close-modal');
                closeModal.addEventListener('click', () => {
                    modal.remove();
                });
            }
        } catch (error) {
            console.error('Error loading department details:', error);
        }
    });
});

// Facility cards functionality
document.querySelectorAll('.facility-card').forEach(card => {
    card.addEventListener('click', () => {
        const facilityName = card.querySelector('h3').textContent;
        const modal = document.createElement('div');
        modal.className = 'facility-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>${facilityName}</h3>
                <p>${card.querySelector('p').textContent}</p>
                <button class="close-modal">Close</button>
            </div>
        `;
        document.body.appendChild(modal);

        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('dept-modal') || 
        e.target.classList.contains('facility-modal') || 
        e.target.classList.contains('success-modal')) {
        e.target.remove();
    }
});

// Add scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all service cards
    document.querySelectorAll('.service-card').forEach(card => observer.observe(card));
    document.querySelectorAll('.stat-item').forEach(stat => observer.observe(stat));
});
