// Enhanced College Attendance Management System - Enterprise Edition
// High-performance application with real-time monitoring and advanced features

// Application Configuration
const APP_CONFIG = {
    version: '2.0.0-enterprise',
    apiBaseUrl: '/api/v2',
    performanceMonitoring: true,
    realTimeSync: true,
    cacheEnabled: true,
    offlineMode: true,
    maxRetries: 3,
    syncInterval: 5000,
    performanceThreshold: 1000
};

// Application Data with Performance Metrics
const appData = {
    systemPerformance: {
        serverMetrics: {
            cpuUsage: 45.2,
            memoryUsage: 67.8,
            diskUsage: 34.1,
            networkThroughput: 125.6,
            activeConnections: 247,
            avgResponseTime: 120,
            databaseQueries: 1450,
            cacheHitRatio: 94.2,
            uptime: "99.97%",
            errorRate: 0.03
        },
        performanceMetrics: {
            pageLoadTime: 850,
            firstContentfulPaint: 450,
            largestContentfulPaint: 950,
            timeToInteractive: 1200,
            cumulativeLayoutShift: 0.02,
            totalBlockingTime: 85
        }
    },
    loginCredentials: {
        students: [
            {id: "S001", username: "aarav.sharma", password: "student123", name: "Aarav Sharma", mfa: "enabled"},
            {id: "S002", username: "priya.patel", password: "student123", name: "Priya Patel", mfa: "enabled"},
            {id: "S003", username: "rahul.kumar", password: "student123", name: "Rahul Kumar", mfa: "disabled"}
        ],
        faculty: [
            {id: "F001", employeeId: "EMP001", password: "faculty123", name: "Dr. Anjali Singh", department: "Computer Science", mfa: "enabled"},
            {id: "F002", employeeId: "EMP002", password: "faculty123", name: "Prof. Rajesh Verma", department: "Information Technology", mfa: "enabled"}
        ],
        administrators: [
            {id: "A001", adminId: "ADMIN001", password: "admin123", name: "Dr. Suresh Gupta", role: "Dean", mfa: "enabled"}
        ]
    },
    students: [
        {
            id: "S001",
            name: "Aarav Sharma",
            course: "Computer Science Engineering",
            semester: "6th",
            rollNumber: "CSE001",
            totalClasses: 45,
            attendedClasses: 41,
            attendancePercentage: 91.1,
            status: "Good",
            lastAttended: "2025-09-12",
            subjects: {
                "Machine Learning": {attended: 8, total: 9, percentage: 88.9, trend: "stable"},
                "Software Engineering": {attended: 9, total: 9, percentage: 100, trend: "up"},
                "Database Systems": {attended: 8, total: 9, percentage: 88.9, trend: "stable"},
                "Computer Networks": {attended: 8, total: 9, percentage: 88.9, trend: "down"},
                "Operating Systems": {attended: 8, total: 9, percentage: 88.9, trend: "stable"}
            },
            weeklyTrend: [85, 90, 88, 92, 91],
            monthlyTrend: [82, 84, 87, 89, 91],
            engagementScore: 8.5,
            riskLevel: "Low",
            notifications: [
                {type: "warning", message: "Attendance in Data Mining below 75%", date: "2025-09-10", read: false},
                {type: "info", message: "New assignment uploaded for ML", date: "2025-09-11", read: true}
            ]
        }
    ],
    faculty: [
        {
            id: "F001",
            name: "Dr. Anjali Singh",
            department: "Computer Science",
            subjects: ["Machine Learning", "Software Engineering"],
            totalClasses: 18,
            classesToday: 2,
            averageAttendance: 87.5,
            performanceMetrics: {
                avgClassSize: 32,
                attendanceVariance: 5.2,
                studentEngagement: 8.7,
                classEfficiency: 92.1
            },
            upcomingClasses: [
                {
                    subject: "Machine Learning",
                    time: "09:00 AM",
                    room: "Lab 301",
                    date: "2025-09-13",
                    expectedStudents: 32,
                    qrCodeGenerated: true,
                    classId: "ML001_130925"
                }
            ],
            recentPerformance: {
                avgAttendanceRate: 87.5,
                onTimeClassStart: 95.2,
                studentFeedbackScore: 4.6,
                digitalAdoptionRate: 89.3
            }
        }
    ],
    realTimeData: {
        activeUsers: 247,
        currentAttendanceSessions: 8,
        pendingQRScans: 15,
        systemAlerts: 3,
        ongoingClasses: [
            {
                subject: "Machine Learning",
                faculty: "Dr. Anjali Singh",
                studentsPresent: 28,
                totalStudents: 32,
                startTime: "09:00 AM",
                qrCodeActive: true,
                timeRemaining: "45 mins"
            }
        ]
    },
    attendanceData: {
        overall: {
            totalStudents: 500,
            averageAttendance: 84.2,
            todayAttendance: 87.5,
            atRiskStudents: 45,
            excellentStudents: 125,
            totalFaculty: 25,
            activeClasses: 8,
            systemEfficiency: 96.8,
            dataProcessingTime: 0.15
        },
        trends: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            attendance: [82, 84, 86, 83, 85, 87, 88, 86, 87],
            performance: [91, 93, 94, 92, 94, 95, 96, 95, 96]
        },
        departmentAnalytics: [
            {
                department: "Computer Science",
                attendance: 89.2,
                students: 150,
                faculty: 8,
                performanceIndex: 94.5,
                technologyAdoption: 97.3,
                riskStudents: 8
            },
            {
                department: "Information Technology",
                attendance: 86.8,
                students: 120,
                faculty: 6,
                performanceIndex: 91.2,
                technologyAdoption: 94.8,
                riskStudents: 12
            }
        ]
    },
    systemAlerts: [
        {
            id: "ALT001",
            type: "critical",
            message: "45 students below 75% attendance threshold",
            affectedUsers: 45,
            timestamp: "2025-09-13 08:30:00",
            actionRequired: true,
            estimatedResolution: "2 hours"
        }
    ]
};

// Global Application State
let currentUser = null;
let currentUserType = null;
let performanceMetrics = {};
let realTimeUpdates = [];
let captchaCode = generateCaptcha();

// Generate CAPTCHA code
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Screen Management
function showScreen(screenId) {
    console.log('Switching to screen:', screenId);
    
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log('Screen activated:', screenId);
    } else {
        console.error('Screen not found:', screenId);
    }
}

// Loading System
async function startLoadingSequence() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const serverResponse = document.getElementById('server-response');
    const dbConnection = document.getElementById('db-connection');
    const cacheStatus = document.getElementById('cache-status');

    const steps = [
        { text: 'Initializing system...', duration: 800 },
        { text: 'Connecting to database...', duration: 600 },
        { text: 'Loading performance metrics...', duration: 500 },
        { text: 'Setting up real-time sync...', duration: 700 },
        { text: 'Initializing cache system...', duration: 400 },
        { text: 'Loading security modules...', duration: 600 },
        { text: 'Finalizing setup...', duration: 500 }
    ];

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const progress = ((i + 1) / steps.length) * 100;
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = step.text;
        
        // Update system metrics during loading
        if (i === 1 && dbConnection) dbConnection.textContent = 'Connected';
        if (i === 4 && cacheStatus) cacheStatus.textContent = 'Active';
        if (serverResponse) serverResponse.textContent = `${Math.round(Math.random() * 50 + 80)}ms`;
        
        await new Promise(resolve => setTimeout(resolve, step.duration));
    }

    // Show performance screen
    setTimeout(() => {
        showPerformanceScreen();
    }, 500);
}

function showPerformanceScreen() {
    showScreen('performance-screen');
    updatePerformanceDisplay();
    initializeRealTimeChart();
    startPerformanceUpdates();
}

function updatePerformanceDisplay() {
    const metrics = appData.systemPerformance.serverMetrics;
    const elements = {
        'perf-cpu': `${metrics.cpuUsage.toFixed(1)}%`,
        'perf-memory': `${metrics.memoryUsage.toFixed(1)}%`,
        'perf-connections': metrics.activeConnections.toString(),
        'perf-response': `${Math.round(metrics.avgResponseTime)}ms`,
        'perf-queries': metrics.databaseQueries.toLocaleString(),
        'perf-cache-hit': `${metrics.cacheHitRatio}%`,
        'perf-disk': `${metrics.diskUsage}%`,
        'perf-uptime': metrics.uptime,
        'perf-page-load': `${appData.systemPerformance.performanceMetrics.pageLoadTime}ms`,
        'perf-first-paint': `${appData.systemPerformance.performanceMetrics.firstContentfulPaint}ms`,
        'perf-tti': `${appData.systemPerformance.performanceMetrics.timeToInteractive}ms`,
        'perf-error-rate': `${metrics.errorRate}%`
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function initializeRealTimeChart() {
    const canvas = document.getElementById('realtime-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const data = {
        labels: Array.from({length: 20}, (_, i) => ''),
        datasets: [{
            label: 'Response Time (ms)',
            data: Array.from({length: 20}, () => Math.random() * 100 + 50),
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };

    const realtimeChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: { point: { radius: 0 } }
        }
    });

    // Update chart in real-time
    setInterval(() => {
        data.datasets[0].data.shift();
        data.datasets[0].data.push(Math.random() * 100 + 50);
        realtimeChart.update('none');
    }, 1000);
}

function startPerformanceUpdates() {
    setInterval(() => {
        // Simulate dynamic performance metrics
        const cpuVariation = (Math.random() - 0.5) * 10;
        const memoryVariation = (Math.random() - 0.5) * 15;
        const responseVariation = (Math.random() - 0.5) * 50;
        
        appData.systemPerformance.serverMetrics.cpuUsage = Math.max(0, Math.min(100, 
            appData.systemPerformance.serverMetrics.cpuUsage + cpuVariation));
        appData.systemPerformance.serverMetrics.memoryUsage = Math.max(0, Math.min(100, 
            appData.systemPerformance.serverMetrics.memoryUsage + memoryVariation));
        appData.systemPerformance.serverMetrics.avgResponseTime = Math.max(50, 
            appData.systemPerformance.serverMetrics.avgResponseTime + responseVariation);
        
        updatePerformanceDisplay();
    }, 3000);
}

// Authentication System
async function authenticateUser(credentials, userType) {
    const startTime = performance.now();
    
    try {
        // Simulate authentication delay
        await new Promise(resolve => setTimeout(resolve, Math.random() * 800 + 200));
        
        let user = null;
        const users = appData.loginCredentials[userType];
        
        switch (userType) {
            case 'students':
                user = users.find(u => 
                    (u.username === credentials.username || u.id === credentials.username) && 
                    u.password === credentials.password
                );
                break;
            case 'faculty':
                user = users.find(u => 
                    u.employeeId === credentials.employeeId && 
                    u.password === credentials.password && 
                    u.department === credentials.department
                );
                break;
            case 'administrators':
                user = users.find(u => 
                    u.adminId === credentials.adminId && 
                    u.password === credentials.password
                );
                
                if (user && credentials.captcha !== captchaCode) {
                    throw new Error('Invalid CAPTCHA code');
                }
                break;
        }
        
        const endTime = performance.now();
        const loginTime = Math.round(endTime - startTime);
        
        updateLoginTime(loginTime);
        
        if (!user) {
            throw new Error('Invalid credentials');
        }
        
        return { user, loginTime };
        
    } catch (error) {
        const endTime = performance.now();
        const loginTime = Math.round(endTime - startTime);
        updateLoginTime(loginTime);
        throw error;
    }
}

function updateLoginTime(time) {
    const loginTimeElement = document.getElementById('login-time');
    if (loginTimeElement) {
        loginTimeElement.textContent = `${time}ms`;
    }
}

// Dashboard Loading Functions
function loadStudentDashboard(studentId) {
    console.log('Loading student dashboard for:', studentId);
    
    const studentData = appData.students.find(s => s.id === studentId);
    if (!studentData) {
        console.error('Student data not found for:', studentId);
        return;
    }

    // Update header information
    const nameElement = document.getElementById('student-name');
    const detailsElement = document.getElementById('student-details');
    
    if (nameElement) nameElement.textContent = `Welcome, ${studentData.name}`;
    if (detailsElement) {
        detailsElement.textContent = `${studentData.course} | ${studentData.semester} Semester | Roll: ${studentData.rollNumber}`;
    }

    // Update stats
    updateStudentStats(studentData);
    
    // Load subjects
    loadStudentSubjects(studentData.subjects);
    
    // Load notifications
    loadStudentNotifications(studentData.notifications);
    
    // Initialize mini chart
    setTimeout(() => initializeStudentMiniChart(studentData.weeklyTrend), 100);
}

function updateStudentStats(studentData) {
    const elements = {
        'student-attendance-percentage': `${studentData.attendancePercentage}%`,
        'student-classes-attended': studentData.attendedClasses,
        'student-total-classes': studentData.totalClasses,
        'student-status': studentData.status,
        'monthly-attended': '38',
        'remaining-classes': String(studentData.totalClasses - studentData.attendedClasses),
        'risk-level': studentData.riskLevel,
        'student-load-time': '350ms',
        'student-cache-hit': '96%',
        'student-offline': 'Ready',
        'student-sync': 'Synced'
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function loadStudentSubjects(subjects) {
    const subjectsList = document.getElementById('student-subjects-list');
    if (!subjectsList) return;
    
    subjectsList.innerHTML = '';

    Object.entries(subjects).forEach(([subject, data]) => {
        const subjectItem = document.createElement('div');
        subjectItem.className = 'subject-item';
        
        const attendanceClass = data.percentage >= 90 ? 'attendance-excellent' : 
                               data.percentage >= 75 ? 'attendance-good' : 'attendance-at-risk';
        
        const trendIcon = data.trend === 'up' ? '📈' : data.trend === 'down' ? '📉' : '➡️';
        
        subjectItem.innerHTML = `
            <div>
                <div class="subject-name">${subject}</div>
                <div class="subject-attendance">${data.attended}/${data.total} classes • Trend: ${trendIcon}</div>
            </div>
            <div class="attendance-percentage ${attendanceClass}">
                ${data.percentage.toFixed(1)}%
            </div>
        `;
        
        subjectsList.appendChild(subjectItem);
    });
}

function loadStudentNotifications(notifications) {
    const notificationsList = document.getElementById('student-notifications');
    if (!notificationsList) return;
    
    notificationsList.innerHTML = '';

    const enhancedNotifications = [
        ...notifications,
        {
            type: 'info',
            message: 'System performance optimized - 15% faster loading',
            date: '2025-09-13'
        },
        {
            type: 'achievement',
            message: 'Perfect attendance streak: 7 days!',
            date: '2025-09-12'
        }
    ];

    enhancedNotifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.className = `notification-item notification-${notification.type}`;
        
        notificationItem.innerHTML = `
            <div class="notification-message">${notification.message}</div>
            <div class="notification-date">${notification.date}</div>
        `;
        
        notificationsList.appendChild(notificationItem);
    });
}

function initializeStudentMiniChart(trendData) {
    const canvas = document.getElementById('student-mini-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [{
                data: trendData,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: { point: { radius: 0 } }
        }
    });
}

function loadFacultyDashboard(facultyId) {
    console.log('Loading faculty dashboard for:', facultyId);
    
    const facultyData = appData.faculty.find(f => f.id === facultyId);
    if (!facultyData) {
        console.error('Faculty data not found for:', facultyId);
        return;
    }

    // Update header information
    const nameElement = document.getElementById('faculty-name');
    const detailsElement = document.getElementById('faculty-details');
    
    if (nameElement) nameElement.textContent = `Welcome, ${facultyData.name}`;
    if (detailsElement) {
        detailsElement.textContent = `${facultyData.department} Department | ${facultyData.subjects.join(', ')}`;
    }

    // Update stats
    updateFacultyStats(facultyData);
    
    // Load live classes
    loadLiveClasses();
    
    // Initialize engagement chart
    setTimeout(() => initializeEngagementChart(), 100);
}

function updateFacultyStats(facultyData) {
    const elements = {
        'faculty-total-classes': facultyData.totalClasses,
        'faculty-classes-today': facultyData.classesToday,
        'faculty-avg-attendance': `${facultyData.averageAttendance}%`,
        'faculty-subjects-count': facultyData.subjects.length,
        'faculty-response': '280ms',
        'faculty-sync': 'Real-time',
        'faculty-processing': 'Fast',
        'faculty-health': 'Excellent',
        'teaching-load': '78%',
        'next-class': 'ML at 2:00 PM',
        'total-students': '64'
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function loadLiveClasses() {
    const liveClassesList = document.getElementById('faculty-live-classes');
    if (!liveClassesList) return;
    
    const ongoingClasses = appData.realTimeData.ongoingClasses;
    liveClassesList.innerHTML = '';

    ongoingClasses.forEach(classItem => {
        const classElement = document.createElement('div');
        classElement.className = 'live-class-item';
        
        classElement.innerHTML = `
            <div class="class-info">
                <h4>${classItem.subject}</h4>
                <p>${classItem.studentsPresent}/${classItem.totalStudents} present • ${classItem.timeRemaining} remaining</p>
            </div>
            <div class="class-status ${classItem.qrCodeActive ? 'active' : 'inactive'}">
                ${classItem.qrCodeActive ? 'QR Active' : 'QR Inactive'}
            </div>
        `;
        
        liveClassesList.appendChild(classElement);
    });
}

function initializeEngagementChart() {
    const canvas = document.getElementById('engagement-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Engagement Score',
                data: [8.2, 7.8, 9.1, 8.7, 9.3],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#1FB8CD'],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

function loadAdminDashboard() {
    console.log('Loading admin dashboard');
    
    const overallData = appData.attendanceData.overall;

    // Update header
    const nameElement = document.getElementById('admin-name');
    const detailsElement = document.getElementById('admin-details');
    
    if (nameElement) nameElement.textContent = `Welcome, ${currentUser.name}`;
    if (detailsElement) detailsElement.textContent = `${currentUser.role} | System Administrator`;

    // Update stats
    updateAdminStats(overallData);
    
    // Load charts
    setTimeout(() => {
        loadAttendanceTrendChart();
        loadDepartmentChart();
    }, 100);

    // Load system alerts
    loadSystemAlerts();
}

function updateAdminStats(overallData) {
    const elements = {
        'admin-total-students': overallData.totalStudents,
        'admin-avg-attendance': `${overallData.averageAttendance}%`,
        'admin-at-risk': overallData.atRiskStudents,
        'admin-excellent': overallData.excellentStudents,
        'system-load': '42%'
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function loadAttendanceTrendChart() {
    const canvas = document.getElementById('attendance-trend-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const trendsData = appData.attendanceData.trends;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trendsData.labels,
            datasets: [{
                label: 'Attendance %',
                data: trendsData.attendance,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Performance Index',
                data: trendsData.performance,
                borderColor: '#FFC185',
                backgroundColor: 'rgba(255, 193, 133, 0.1)',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100
                }
            }
        }
    });
}

function loadDepartmentChart() {
    const canvas = document.getElementById('department-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const deptData = appData.attendanceData.departmentAnalytics;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: deptData.map(d => d.department),
            datasets: [{
                label: 'Attendance %',
                data: deptData.map(d => d.attendance),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100
                }
            }
        }
    });
}

function loadSystemAlerts() {
    const alertsList = document.getElementById('system-alerts');
    if (!alertsList) return;
    
    alertsList.innerHTML = '';

    const enhancedAlerts = [
        ...appData.systemAlerts,
        {
            type: 'info',
            title: 'System Optimization Complete',
            message: 'Database query performance improved by 15%',
            priority: 'low',
            timestamp: '2025-09-13 19:45',
            department: 'IT'
        },
        {
            type: 'warning',
            title: 'Cache Hit Ratio',
            message: 'Cache performance slightly below optimal threshold',
            priority: 'medium',
            timestamp: '2025-09-13 18:30',
            department: 'System'
        }
    ];

    enhancedAlerts.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = `alert-item alert-${alert.type}`;
        
        alertElement.innerHTML = `
            <div class="alert-header">
                <h4 class="alert-title">${alert.title}</h4>
                <span class="alert-priority priority-${alert.priority}">${alert.priority}</span>
            </div>
            <div class="alert-message">${alert.message}</div>
            <div class="alert-meta">
                <span>${alert.department || 'All'}</span>
                <span>${alert.timestamp}</span>
            </div>
        `;
        
        alertsList.appendChild(alertElement);
    });
}

// Draw CAPTCHA
function drawCaptcha() {
    const canvas = document.getElementById('captcha-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add noise
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`;
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
    
    // Draw text
    ctx.font = '20px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText(captchaCode, canvas.width / 2, canvas.height / 2 + 7);
    
    // Add lines
    for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }
}

// QR Code System
function showQRModal() {
    const facultyData = appData.faculty.find(f => f.id === currentUser.id);
    if (!facultyData || !facultyData.upcomingClasses.length) {
        alert('No upcoming classes found for QR code generation.');
        return;
    }

    const nextClass = facultyData.upcomingClasses[0];
    const qrCode = `CAMS_${nextClass.subject.replace(/\s+/g, '_').toUpperCase()}_${Date.now()}`;

    // Update modal content
    document.getElementById('qr-subject').textContent = nextClass.subject;
    document.getElementById('qr-time').textContent = nextClass.time;
    document.getElementById('qr-room').textContent = nextClass.room;
    document.getElementById('qr-code-text').textContent = qrCode;
    document.getElementById('qr-code-content').textContent = qrCode;
    document.getElementById('qr-scan-count').textContent = '0/32';
    document.getElementById('qr-status').textContent = 'Active';

    // Start timer
    startQRTimer();

    // Show modal
    const modal = document.getElementById('qr-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function startQRTimer() {
    const timerElement = document.getElementById('qr-timer');
    if (!timerElement) return;

    let timeRemaining = 10 * 60; // 10 minutes in seconds
    
    const updateTimer = () => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        timerElement.textContent = `Valid for: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeRemaining <= 0) {
            timerElement.textContent = 'Expired';
            timerElement.style.color = 'var(--color-error)';
            clearInterval(timerInterval);
        }
        
        timeRemaining--;
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Logout function
function logout() {
    console.log('Logging out...');
    currentUser = null;
    currentUserType = null;
    showScreen('welcome-screen');
    
    // Clear form data
    document.querySelectorAll('input').forEach(input => {
        if (input.type !== 'checkbox') {
            input.value = '';
        } else {
            input.checked = false;
        }
    });
    
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
}

// Initialize Application
function initializeApp() {
    console.log('🚀 Initializing Enhanced CAMS Enterprise Edition...');

    // Start loading sequence
    startLoadingSequence();

    // Continue to login button
    const continueBtn = document.getElementById('continue-to-login');
    if (continueBtn) {
        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Continue button clicked');
            showScreen('welcome-screen');
        });
    }

    // Role selection buttons with proper event handling
    const roleButtons = document.querySelectorAll('.role-btn');
    console.log('Found role buttons:', roleButtons.length);
    
    roleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const role = btn.getAttribute('data-role');
            console.log('Role selected:', role);
            showScreen(`${role}-login`);
            
            // Draw CAPTCHA for admin login
            if (role === 'admin') {
                setTimeout(() => drawCaptcha(), 100);
            }
        });
    });

    // Back buttons
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Back button clicked');
            showScreen('welcome-screen');
        });
    });

    // Login forms
    setupLoginForms();

    // Logout buttons
    const logoutButtons = document.querySelectorAll('.logout-btn');
    logoutButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    });

    // Modal functionality
    setupModals();

    // Dashboard actions
    setupDashboardActions();

    console.log('✅ Application initialization complete');
}

function setupLoginForms() {
    // Student login
    const studentForm = document.getElementById('student-login-form');
    if (studentForm) {
        studentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Student login form submitted');
            
            const submitBtn = document.getElementById('student-login-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            
            try {
                // Show loading state
                btnText.style.display = 'none';
                btnLoader.style.display = 'inline';
                submitBtn.disabled = true;
                
                const credentials = {
                    username: document.getElementById('student-username').value.trim(),
                    password: document.getElementById('student-password').value.trim()
                };
                
                console.log('Authenticating student:', credentials.username);
                const result = await authenticateUser(credentials, 'students');
                
                currentUser = result.user;
                currentUserType = 'student';
                
                console.log('Student login successful:', result.user);
                loadStudentDashboard(result.user.id);
                showScreen('student-dashboard');
                
            } catch (error) {
                console.error('Student login failed:', error);
                alert(error.message || 'Login failed. Try: aarav.sharma / student123');
            } finally {
                // Restore button state
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }

    // Faculty login
    const facultyForm = document.getElementById('faculty-login-form');
    if (facultyForm) {
        facultyForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Faculty login form submitted');
            
            const submitBtn = document.getElementById('faculty-login-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            
            try {
                btnText.style.display = 'none';
                btnLoader.style.display = 'inline';
                submitBtn.disabled = true;
                
                const credentials = {
                    employeeId: document.getElementById('faculty-id').value.trim(),
                    password: document.getElementById('faculty-password').value.trim(),
                    department: document.getElementById('faculty-department').value
                };
                
                console.log('Authenticating faculty:', credentials.employeeId);
                const result = await authenticateUser(credentials, 'faculty');
                
                currentUser = result.user;
                currentUserType = 'faculty';
                
                console.log('Faculty login successful:', result.user);
                loadFacultyDashboard(result.user.id);
                showScreen('faculty-dashboard');
                
            } catch (error) {
                console.error('Faculty login failed:', error);
                alert(error.message || 'Login failed. Try: EMP001 / faculty123 / Computer Science');
            } finally {
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }

    // Admin login
    const adminForm = document.getElementById('admin-login-form');
    if (adminForm) {
        adminForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Admin login form submitted');
            
            const submitBtn = document.getElementById('admin-login-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            
            try {
                btnText.style.display = 'none';
                btnLoader.style.display = 'inline';
                submitBtn.disabled = true;
                
                const credentials = {
                    adminId: document.getElementById('admin-id').value.trim(),
                    password: document.getElementById('admin-password').value.trim(),
                    captcha: document.getElementById('admin-captcha').value.trim(),
                    accessLevel: document.getElementById('admin-access-level').value
                };
                
                console.log('Authenticating admin:', credentials.adminId);
                const result = await authenticateUser(credentials, 'administrators');
                
                currentUser = result.user;
                currentUserType = 'admin';
                
                console.log('Admin login successful:', result.user);
                loadAdminDashboard();
                showScreen('admin-dashboard');
                
            } catch (error) {
                console.error('Admin login failed:', error);
                alert(error.message || `Login failed. Try: ADMIN001 / admin123 / Full Administrator\nCAPTCHA: ${captchaCode}`);
            } finally {
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }
}

function setupModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const closeButtons = modal.querySelectorAll('.modal-close');
        
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // QR modal specific actions
    const refreshQRBtn = document.getElementById('refresh-qr');
    if (refreshQRBtn) {
        refreshQRBtn.addEventListener('click', () => {
            alert('🔄 QR Code Refreshed\n\nNew security code generated. Previous code invalidated.');
        });
    }

    const extendTimerBtn = document.getElementById('extend-timer');
    if (extendTimerBtn) {
        extendTimerBtn.addEventListener('click', () => {
            alert('⏰ Timer Extended\n\nQR code validity extended by 10 minutes.');
        });
    }

    const broadcastQRBtn = document.getElementById('broadcast-qr');
    if (broadcastQRBtn) {
        broadcastQRBtn.addEventListener('click', () => {
            alert('📡 QR Code Broadcasted\n\nQR code sent to all enrolled students via push notification.');
        });
    }
}

function setupDashboardActions() {
    // QR Scanner for students
    const scanBtn = document.getElementById('scan-btn');
    if (scanBtn) {
        scanBtn.addEventListener('click', async () => {
            try {
                const scanArea = document.getElementById('scan-area');
                const scannerStatus = document.getElementById('scanner-status');
                const lastScanElement = document.getElementById('last-scan');
                
                // Visual feedback
                if (scanArea) scanArea.style.transform = 'scale(1.1)';
                if (scannerStatus) {
                    scannerStatus.innerHTML = '<span class="status-dot status-syncing"></span><span>Scanning...</span>';
                }
                
                // Simulate scanning delay
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Simulate successful scan
                if (scanArea) scanArea.style.transform = 'scale(1)';
                if (scannerStatus) {
                    scannerStatus.innerHTML = '<span class="status-dot status-online"></span><span>Scan successful</span>';
                }
                if (lastScanElement) lastScanElement.textContent = new Date().toLocaleTimeString();
                
                alert('✅ Attendance marked successfully!\nClass: Machine Learning\nTime: ' + new Date().toLocaleTimeString());
                
                // Update attendance percentage
                const percentageElement = document.getElementById('student-attendance-percentage');
                if (percentageElement) {
                    const currentPercentage = parseFloat(percentageElement.textContent);
                    const newPercentage = Math.min(100, currentPercentage + 2.2);
                    percentageElement.textContent = `${newPercentage.toFixed(1)}%`;
                }
                
            } catch (error) {
                console.error('QR scan error:', error);
                alert('❌ QR scan failed. Please try again.');
            }
        });
    }

    // Generate QR Code for faculty
    const generateQRBtn = document.getElementById('generate-qr-btn');
    if (generateQRBtn) {
        generateQRBtn.addEventListener('click', () => {
            if (currentUserType === 'faculty') {
                showQRModal();
            }
        });
    }

    // Other action buttons
    const bulkAttendanceBtn = document.getElementById('bulk-attendance-btn');
    if (bulkAttendanceBtn) {
        bulkAttendanceBtn.addEventListener('click', () => {
            alert('📝 Bulk Attendance System\n\nThis advanced feature allows faculty to mark attendance for multiple students simultaneously using smart algorithms and pattern recognition.');
        });
    }

    const analyticsBtn = document.getElementById('analytics-btn');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            alert('📊 Live Analytics Dashboard\n\nReal-time student engagement metrics, attendance patterns, and predictive analytics for proactive intervention.');
        });
    }

    const reportsBtn = document.getElementById('reports-btn');
    if (reportsBtn) {
        reportsBtn.addEventListener('click', () => {
            alert('📈 Smart Reports Generator\n\nAI-powered report generation with automated insights, trend analysis, and customizable export formats.');
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing application...');
    initializeApp();
});

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
});

// Performance monitoring
window.addEventListener('load', () => {
    console.log('Application fully loaded');
});