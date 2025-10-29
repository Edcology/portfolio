import * as React from "react";

interface EmailTemplateProps {
  fullName: string
  message: string
  email: string
}

export const EmailTemplate = ({ fullName, message, email }: EmailTemplateProps) => (
    <div className="p-6">
      <h6>Hi Gbolahan, my name is {fullName}! and my email is <strong>{email}</strong></h6>
      <p>{message}</p>
    </div>

)