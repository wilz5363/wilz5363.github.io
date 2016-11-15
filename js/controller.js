/**
 * Created by chanwi on 11/15/2016.
 */
app.controller('aboutMeController', function ($scope) {

    $scope.img = {
        'path': 'img/myPic.jpg'
    }

    $scope.abouts = {
        'Name': 'Chan Wilson',
        'Age': '23 (2016)',
        'Education': 'BSc. (Hons) Computer Science (Database Management)',
        'University': 'Universiti Teknikal Malaysia Melaka (UTeM)',
        'Origin': 'Penang (Currently in PJ) (Sept, 2017)',
        'Email': 'chanwilson1993@gmail.com',
        'CodeName': 'Wilz5363 / wilz5363'
    };
});

app.controller('experienceController', function ($scope) {
    $scope.experieces = [
        {
            'Title': 'HPE Internship',
            'Date': 'Sept, 2016 - Feb, 2017',
            'Desc': 'Internship as a Application Developer and Global Database Administrator (GDBA).'
        },
        {
            'Title': 'Microsoft Student Partner Alumni (MSPAlu), Microsoft Malaysia',
            'Date': 'August, 2016 - Present',
            'Desc': 'To keep on striving and be the next MVP.'
        },
        {
            'Title': 'Microsoft Student Partner Apprentice (MSPA), Microsoft Malaysia',
            'Date': 'March, 2016 - July, 2016',
            'Desc': 'Provide technical guidance in coding, design, implementation and executions to students.',
        },
        {
            'Title': 'Mentor for Basic Android Application Workshop (Faculty)',
            'Date': '25 March 2016',
            'Desc': 'Provide simple stepping stone workshop for students in learning making first Android application.'
        }
    ]
});

app.controller('achievementController', function ($scope) {
    $scope.achievements = [
        {
            'Title': 'GDBA Release Management',
            'Desc': 'An in-house web-based application for HPE GDBA to do their daily task',
            'TechUsed': 'Asp .Net Webform, Twitter Bootstrap, SQL Server'
        },
        {
            'Title': 'GDBA Archive Metrics',
            'Desc': 'A dashboard for managerial level of GDBA to monitor, gain insight data of archive activities',
            'TechUsed': 'Asp .Net WebAPI, Twitter Bootstrap, SQL Server, Oracle, AngularJs (1), ChartJs'
        },
        {
            'Title': 'Internship Log Book System (Prototype)',
            'Desc': 'A web-based system to replace physical log book that are currently used by students in UTeM (FTMK)',
            'TechUsed': 'PHP, Twitter Bootstrap, MySQL with Database Programming'
        },
        {
            'Title': 'Internship Placement System (Prototype)',
            'Desc': 'A web-based system for students , companies and lecturers tor carry out internship process and management remotely',
            'TechUsed': 'PHP, Twitter Bootstrap, PostgresSQL with Database Programming'
        },
        {
            'Title': 'Clinical Management System (Prototype)',
            'Desc': 'A desktop application that help administrative works in a clinic more streamlined , less burdensome and reduce human error through automation',
            'TechUsed': 'Java and MySQL with Database Programming'
        },

    ]
});