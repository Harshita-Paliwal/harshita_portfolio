// Open the resume in a new tab and also trigger a download.
export function openAndDownloadResume() {
  const resumeUrl = import.meta.env.VITE_RESUME_URL || '/resume.pdf';

  window.open(resumeUrl, '_blank', 'noopener,noreferrer');

  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Harshita_Paliwal_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
}
