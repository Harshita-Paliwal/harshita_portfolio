// Shared resume URL used by both preview and download actions.
export function getResumeUrl() {
  return import.meta.env.VITE_RESUME_URL || '/resume-hp.pdf';
}

// Open the resume in a new tab for preview only.
export function openResumePreview() {
  const resumeUrl = getResumeUrl();
  window.open(resumeUrl, '_blank', 'noopener,noreferrer');
}

// Trigger a direct browser download of the resume file.
export function downloadResume() {
  const resumeUrl = getResumeUrl();

  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Harshita_Paliwal_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
}
