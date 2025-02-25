export const fields = [
    {
    header: "Personal Details",
        list: [

            {
                name: "Name",
                type: "text",
                label: "Name",
                placeholder: "enter your name",
                required: "true"
            },
            {
                name: "Email",
                type: "email",
                label: "Email",
                placeholder: "enter your email",
                required: "true"
            },
            {
                name: "Phone",
                type: "tel",
                label: "Phone",
                placeholder: "enter your phone",
                required: "false"
            },
            {
                name: "Address",
                type: "text",
                label: "Address",
                placeholder: "enter your address",
                required: "false"
            },
            {
                name: "LinkedIn",
                type: "url",
                label: "LinkedIn",
                placeholder: "enter your LinkedIn",
                required: "false"
            },
            {
                name: "Portfolio",
                type: "url",
                label: "Portfolio",
                placeholder: "enter your portfolio",
                required: "false"
            },
        ]
    },
    {
    header: "Profile Summary",
        list: [

            {
                name: "Summary",
                type: "textarea",
                label: "Summary",
                placeholder: "enter your summary",
                required: "false"
            }
        ],
    },
    {
    header: "Experience Details",
        list: [
            {
                name: "Job Title",
                type: "text",
                label: "Job Title",
                placeholder: "enter your job",
                required: "true"
            },
            {
                name: "Company Name",
                type: "text",
                label: "Company Name",
                placeholder: "enter your company name",
                required: "true"
            },
            {
                name: "Job Duration",
                type: "text",
                label: "Job Duration",
                placeholder: "eg. jan-2000 to feb-2000",
                required: "true"
            }
        ]
    },
    {
    header: "Education Details",
        list: [
            {
                name: "Degree",
                type: "text",
                label: "Degree",
                placeholder: "enter your degree",
                required: "true"
            },
            {
                name: "Uni/Scl Name",
                type: "text",
                label: "University/School",
                placeholder: "enter name",
                required: "true"
            },
            {
                name: "Graduation Year",
                type: "text",
                label: "Graduation Year",
                placeholder: "eg. mar-2001",
                required: "true"
            }
        ]
    },
    {
    header: "Skills",
        list: [
            {
                name: "Skill",
                type: "text",
                label: "Skill",
                placeholder: "enter your skill",
                required: "false"
            }
        ]
    },
    {
    header: "Language",
        list: [
            {
                name: "Language",
                type: "text",
                label: "Language",
                placeholder: "enter your language",
                required: "true"
            }
        ]
    },
    {
    header: "Projects Details",
        list: [
            {
                name: "Project Title",
                type: "text",
                label: "Project Title",
                placeholder: "enter your project name",
                required: "true"
            },
            {
                name: "Project Description",
                type: "textarea",
                label: "Project Description",
                placeholder: "enter your project description",
                required: "true"
            },
            {
                name: "Project Link",
                type: "url",
                label: "Project Link",
                placeholder: "enter your project link",
                required: "false"
            }
        ]
    },
    {
    header: "AchievementsDetails",
        list: [
            {
                name: "achievement name",
                type: "text",
                label: "Name",
                placeholder: "enter achievement name",
                required: "false"
            }

        ]
    }
]