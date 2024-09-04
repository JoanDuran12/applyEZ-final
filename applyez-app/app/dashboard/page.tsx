'use client'

import { useState } from 'react'
import { UserButton } from "@clerk/nextjs"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ResumeAnalysis } from '@/components/ResumeAnalysis'
// import { CoverLetterEnhancement } from '@/components/CoverLetterEnhancement'
// import { JobSearchResults } from '@/components/JobSearchResults'
// import { ATSCheckerResults } from '@/components/ATSCheckerResults'
// import { DocumentEditor } from '@/components/DocumentEditor'
// import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("resume")

  const mockATSResults = {
    score: 75,
    findings: [
      { passed: true, message: "Contact information present" },
      { passed: false, message: "Missing key skills" },
      { passed: true, message: "Education section well-formatted" },
    ],
    suggestions: [
      "Add more industry-specific keywords",
      "Quantify your achievements with specific metrics",
      "Include a summary or objective statement",
    ],
  }

//   return (
//     <ErrorBoundary>
//       <div className="container mx-auto p-4">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">AI Resume Enhancer Dashboard</h1>
//           <UserButton afterSignOutUrl="/" />
//         </header>
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
//           <TabsList>
//             <TabsTrigger value="resume">Resume</TabsTrigger>
//             <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
//             <TabsTrigger value="job-search">Job Search</TabsTrigger>
//             <TabsTrigger value="ats-check">ATS Check</TabsTrigger>
//             <TabsTrigger value="editor">Editor</TabsTrigger>
//           </TabsList>
//           <TabsContent value="resume">
//             <ResumeAnalysis />
//           </TabsContent>
//           <TabsContent value="cover-letter">
//             <CoverLetterEnhancement />
//           </TabsContent>
//           <TabsContent value="job-search">
//             <JobSearchResults />
//           </TabsContent>
//           <TabsContent value="ats-check">
//             <ATSCheckerResults results={mockATSResults} />
//           </TabsContent>
//           <TabsContent value="editor">
//             <DocumentEditor 
//               initialContent="Your initial resume or cover letter content here."
//               suggestions={mockATSResults.suggestions}
//             />
//           </TabsContent>
//         </Tabs>
//         </div>
//     </ErrorBoundary>
//   )
// }
