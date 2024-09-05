'use client'

import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Upload, FileText } from 'lucide-react'
// import { toast } from 'react-hot-toast'

export default function ResumeAnalysis(){

    const [file, setFile] = useState<File|null>(null)

    const handleSubmit = (e:) => {
        try{
            await new Promise(resolve=> )
        }
    }

    const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files){
            setFile(e.target.files[0])
        }
    }

    return (
        <div>
            <h1>Resume Analysis</h1>
            <h2>Upload your resume and a job description for AI-powered suggestions</h2>

            <form>
                <input type="file" name="Choose File" placeholder = "No file chosen" />
                <input type="description" name = "Job Description" placeholder = "Paste the job description here"/>
                <button>Analyze Resume</button>
            </form>
        </div>
    )
}

